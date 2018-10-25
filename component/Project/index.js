import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import SwipeOut from 'react-native-swipeout'

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    id: PropTypes.string.isRequired,
    deleteProject: PropTypes.func.isRequired,
  }
  
  render() {
    const { id, name, deleteProject, text} = this.props
    var swipeoutBtn = [
        {
            text: 'Delete',
            backgroundColor: "red",
            onPress: () => {
              deleteProject(id)
            }
        }
    ]
    return (
      <SwipeOut right={swipeoutBtn} style={styles.swipeOut}>
        <View style={styles.container}>
          <FontAwesome name="circle" size={50} color="orange" />
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity 
            style={styles.viewBtnWrapper} 
            
          >
            <View style={styles.viewBtn}>
              <Text style={styles.viewBtnText}>View</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SwipeOut>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30
  },
  text:  {
      marginLeft: 30,
      fontWeight: "400",
      fontSize: 20,
      marginVertical: 20
  },
  viewBtnWrapper: {
    position: "absolute",
    right: 10
  },
  viewBtn: {
    width: 70,
    height: 30,
    backgroundColor: "#007AFF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  viewBtnText: {
    color: "white",
    fontSize: 16,
  },
  swipeOut: {
    backgroundColor: "white",
  }
});

export default Project;