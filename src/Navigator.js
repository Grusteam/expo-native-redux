// import React, { Component } from 'react';
// import {  } from 'redux';
// import {  } from 'react-redux';
import {
	createAppContainer,
	createSwitchNavigator,
	createDrawerNavigator,
	createStackNavigator,
	createBottomTabNavigator,
} from 'react-navigation';
import * as nativeBase from 'native-base';

/* components */
import {
	TouchableOpacity
} from 'react-native';

/* screens */
import Home from './screens/Home';
import Login from './screens/Login';
import Feed from './screens/Feed';
import Goals from './screens/Goals';


/* уровень роута, навигатор - Tab */
const HomeTabNavigator = createBottomTabNavigator(
	{
		Feed,
		Goals,
	}
);

/* уровень роута, навигатор - Stack */
const HomeStackNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeTabNavigator,
			navigationOptions: ({ navigation }) => ({
				title: 'iki'
			})
		},
	}
);

/* уровень роута, навигатор - Drawer */
const HomeDrawerNavigator = createDrawerNavigator(
	{
		Home: HomeStackNavigator,
	}
);

/* уровень авторизации, навигатор - Switch */
const SwitchNavigator = createAppContainer(createSwitchNavigator(
	{
		Login,
		Home: HomeDrawerNavigator,
	}
));

export default SwitchNavigator;