import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';
import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

export default class MainScreen extends Component {

  static navigationOptions = {
    headerLeft: <Icon
      name="ios-camera"
      style={{ paddingLeft: 10 }}
    />,
    title: "Instagram",
    headerRight: <Icon name="send"
      style={{ paddingRight: 10 }}
    />,
  };

  render() {
    return (
      <AppTabNavigator />
    )
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  HomeTab: {
    screen: HomeTab,
  },
  SearchTab: {
    screen: SearchTab,
  },
  AddMediaTab: {
    screen: AddMediaTab,
  },
  LinksTab: {
    screen: LikesTab,
  },
  ProfileTab: {
    screen: ProfileTab,
  },
},
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: { backgroundColor: '#fff' },
      indicatorStyle: { backgroundColor: "#000" },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);

const AppTabNavigator = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});