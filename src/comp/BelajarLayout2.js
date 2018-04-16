import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout2 extends React.Component {
    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.box1}>
            <Text style={{ padding: 30, fontSize: 20, color:' white', textAlignt:'center'}}>
            Header</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.text}>slider</Text>
          </View>
          <View style={styles.box3}>
            <View style={styles.button}><Text> 1 </Text> </View>
            <View style={styles.button}><Text> 2 </Text> </View>
            <View style={styles.button}><Text> 3 </Text> </View>
            <View style={styles.button}><Text> 4 </Text> </View>
          </View>
          <View style={styles.box4}>
            <View style={styles.button}><Text> 5 </Text> </View>
            <View style={styles.button}><Text> 6 </Text> </View>
            <View style={styles.button}><Text> 7 </Text> </View>
            <View style={styles.button}><Text> 8 </Text> </View>
          </View>
          <View style={styles.box5}>
            <Text style={{ padding: 30, fontSize: 20, color: 'white', textAlignt:'center'}}>
             Footer </Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#0D47A1',
  },

  box2: {
    flex: 2,
    backgroundColor: '#1E88E5',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },

  box3: {
    flex: 1,
    backgroundColor: '#64B5F6',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  box4: {
    flex: 1,
    backgroundColor: '#64B5F6',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  box5: {
    flex: 1,
    backgroundColor: '#0D47A1',
    margin: 10,
  },

  button: {
      width: 50,
      height: 50,
      background Color:'white',
      justifyContent: 'center',
      alignItems: 'center',
  },
  text: {
    fontSize: 25,
  }
});
