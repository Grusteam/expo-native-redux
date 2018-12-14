import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

/* components */
import LocalStateApp from './components/LocalStateApp.js';
import ReduxStateApp from './components/ReduxStateApp.js';

export default createAppContainer(createBottomTabNavigator(
	{
		LocalStateApp: {
			screen: LocalStateApp,
			navigationOptions: {
				tabBarLabel: 'Local',
				tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name='ios-home' size={24}/>,
			}
		},
		ReduxStateApp: {
			screen: ReduxStateApp,
			navigationOptions: {
				tabBarLabel: 'Redux',
				tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name='ios-settings' size={24}/>,
			}
		},
	},
	{
		initialRouteName: 'ReduxStateApp',
		order: ['ReduxStateApp', 'LocalStateApp'],
		navigationOptions: {
			/* tabBarVisible: false, */
		},
		tabBarOptions: {
			activeTintColor: 'red',
			inactiveTintColor: 'blue',
		},
	},
));