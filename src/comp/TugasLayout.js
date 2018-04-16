import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TugasLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={{ padding: 30, fontSize: 20, color: 'white', textAlign: 'center' }}
          >Header</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Slider</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.button}><Text> 1 </Text></View>
          <View style={styles.button}><Text> 2 </Text></View>
          <View style={styles.button}><Text> 3 </Text></View>
          <View style={styles.button}><Text> 4 </Text></View>
        </View>
        <View style={styles.box4}>
          <View style={styles.button}><Text> 6 </Text></View>
          <View style={styles.button}><Text> 7 </Text></View>
          <View style={styles.button}><Text> 8 </Text></View>
          <View style={styles.button}><Text> 9 </Text></View>

        </View>
        <View style={styles.box5}>
          <Text style={{ padding: 5, fontSize: 20, color: 'white', textAlign: 'center' }} >
          Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#B2DFDB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    //flex: 1, //
    backgroundColor: '#00796B',
  },
  box2: {
    flex: 3, // lebar dari box menjadi lebih besar dari 1
    backgroundColor: '#4DB6AC',
    flexDirection: 'column',
    justifyContent: 'space-around',

    alignItems: 'center'

  },
  box3: {
    flex: 1,
    backgroundColor: '#26A69A',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  box4: {
    flex: 1,
    backgroundColor: '#26A69A',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  /*  box6: {
    flex: 1,
    backgroundColor: '#26A69A',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  }, */
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box5: {
  //  flex: 1,
    backgroundColor: '#00796B',
    margin: 10,
  },
  text: {
    fontSize: 25
  },
});
