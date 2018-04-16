import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class layoutditha extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', color: 'white', padding: 30, fontSize: 17 }} > Pendidikan Teknik Informatika </Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 20 }}> Slider </Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text> 1 </Text></View>
        <View style={styles.button}><Text> 2 </Text></View>
        <View style={styles.button}><Text> 3 </Text></View>
        <View style={styles.button}><Text> 4 </Text></View>
      </View>
      <View style={styles.box3}>
        <View style={styles.button}><Text> 5 </Text></View>
        <View style={styles.button}><Text> 6 </Text></View>
        <View style={styles.button}><Text> 7 </Text></View>
        <View style={styles.button}><Text> 8 </Text></View>
      </View>

      <View style={styles.box4}>
          <Text style={{ textAlign: 'center', color: 'white', padding: 30, fontSize: 20 }}> #JaenKuliahdiPTI</Text>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.7,
    backgroundColor: 'blue',
  },
  box2: {
    flex: 1,
    backgroundColor: '#2196F3',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 0.7,
    backgroundColor: '#90CAF9',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 0.7,
    backgroundColor: '#1565C0',
    margin: 10
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
