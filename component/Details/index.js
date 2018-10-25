import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView, AsyncStorage } from 'react-native';
import uuidv1 from 'uuid/v1';
import Project from '../Project';

const { height, width } = Dimensions.get('window');

class Details extends React.Component {
    state = {
        newProject: "",
        loadedProjects: false,
        projects: {}
    }
    componentDidMount = () => {
        this._loadProjects();
    }
    render() {
        const { newProject, loadedProjects, projects } = this.state;
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder={"New Project"}
                    value={newProject}
                    onChangeText={this._controllNewProject}
                    returnKeyType={"done"}
                    autoCorrect= {false}
                    onSubmitEditing={this._addProjects}
                />
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {Object.values(projects)
                        .reverse()
                        .map(project => (
                            <Project 
                                key={project.id}
                                deleteProject={this._deleteProject}
                                {...project}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
    _controllNewProject = text => {
        this.setState({
          newProject: text
        });
      }

    _loadProjects = async () => {
        try {
            const projects = await AsyncStorage.getItem("@projects");
            const parsedProjects = JSON.parse(projects);
            this.setState({loadedProjects: true, projects: parsedProjects || {} });
        } catch(err) {
            console.log(err)
        }
    }
    _addProjects = () => {
        const { newProject } = this.state;
        if (newProject !== "") {
            this.setState(prevState => {
            const ID = uuidv1();
            const newProjectObject = {
                [ID]: {
                id: ID,
                text: newProject,
                createdAt: Date.now()
                }
            }
            const newState = {
                ...prevState,
                newProject: "",
                projects: {
                ...prevState.projects,
                ...newProjectObject
                }
            }
            this._saveProjects(newState.projects);
                return { ...newState };
            });
        }
    }
    _deleteProject = id => {
        this.setState(prevState => {
          const projects = prevState.projects;
          delete projects[id];
          const newState = {
            ...prevState,
            ...projects
        };
          this._saveProjects(newState.projects);
          return { ...newState };
        });
    };
    _saveProjects = newProejcts => {
        const saveProjects = AsyncStorage.setItem("@projects", JSON.stringify(newProejcts));
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 500,
        width: width,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: "center", 
        ...Platform.select({
            ios: {
                shadowColor: "rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                height: -1,
                width: 0
                }
            },
            android: {
                elevation: 3
            }
        })
    },
    input: {
        padding: 20,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        fontSize: 25
    },
    scrollView: {
        width: width - 40
    },
});

export default Details;