// import React, { Component } from 'react';
// import {  } from 'redux';
// import {  } from 'react-redux';
import {
	createAppContainer,
	createSwitchNavigator,
	createDrawerNavigator,
	createStackNavigator,
	createMaterialTopTabNavigator,
} from 'react-navigation';
import * as nativeBase from 'native-base';

/* screens */
import Home from './screens/Home';
import Login from './screens/Login';


/* уровень роута, навигатор - Tab */
const HomeTabNavigator = createMaterialTopTabNavigator(
	{
		Home,
	}
);

/* уровень роута, навигатор - Stack */
const HomeStackNavigator = createStackNavigator(
	{
		Home: HomeTabNavigator,
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