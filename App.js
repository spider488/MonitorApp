import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView, AsyncStorage } from 'react-native';
import Header from './component/Header';
import Details from './component/Details';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.upper}>
          <Header />
        </View>

        <View style={styles.middle}>
          <View style={styles.chart}></View>
        </View>

        <View style={styles.lower}>
          <Details />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  chart: {
    width: width,
    height: 300,
    backgroundColor: "gray"
  }
});
