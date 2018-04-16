import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Input from './Input';
import RiwayatAgenda from './RiwayatAgenda';
class HomeScreen extends React.Component {
  render() {
    return (
      <RiwayatAgenda />
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <Input />
    );
  }
}

export default TabNavigator(
  {
    Agenda: { screen: HomeScreen },
    Tambahkan: { screen: SettingsScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Agenda') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
        } else if (routeName === 'Tambahkan') {
          iconName = `ios-add${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);
