import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, ScrollView } from 'react-native';

const { width, height, scale } = Dimensions.get("window");
class cat extends Component {
  render() {
    return (
      <View>
        <View style={styles.aa}>
          <Text>屏幕的宽:{width}</Text>
          <Text>屏幕的高:{height}</Text>
          <Text>屏幕的像素比:{scale}</Text>
          <Text style={styles.line}></Text>
        </View>
        <View style={styles.aa1}>
          <View style={styles.View1}></View>
          <View style={styles.View2}><Text style={{ color: 'white', fontSize: 30 }}>flexDirection水平布局</Text></View>
          <View style={styles.View3}></View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  aa: {
    width: "100%",
    height: "50%",
    backgroundColor: 'aqua'
  },
  aa1: {
    width: "100%",
    height: "50%",
    backgroundColor: 'aqua',
    flexDirection: "row"
  },

  line: {
    marginTop: 20,
    height: 1 / scale,
    backgroundColor: 'white'
  },
  View1: {
    flex: 1,
    backgroundColor: 'red'
  },
  View2: {
    flex: 2,
    backgroundColor: 'green'
  },
  View3: {
    flex: 1,
    backgroundColor: 'blue'
  },
})

export default cat