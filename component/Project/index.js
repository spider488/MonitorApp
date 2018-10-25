import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class Project extends React.Component {
  render() {
    const { name } = this.props
    return (
      <View style={styles.container}>
          <FontAwesome name="circle" size={50} color="orange" />
          <Text style={styles.text}>{name}</Text>
          <TouchableOpacity style={styles.viewBtnWrapper}>
            <View style={styles.viewBtn}>
              <Text style={styles.viewBtnText}>View</Text>
            </View>
          </TouchableOpacity>
      </View>
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
  }
});

export default Project;