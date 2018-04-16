import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box1}>
          <Text style={styles.text}>1 </Text>
      </View>
      <View style={styles.box2}>
          <Text style={styles.text}>2 </Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>3 </Text>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',

  },
  box1: {
    flex: 1,

    backgroundColor: 'green',
  },
  box2: {
    flex: 1,
    backgroundColor: 'yellow',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 50,
  }
});
