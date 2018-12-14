import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

console.log('createMaterialTopTabNavigator', createMaterialTopTabNavigator);

/* components */
import LocalStateApp from './components/LocalStateApp.js';
import ReduxStateApp from './components/ReduxStateApp.js';

export default createAppContainer(createMaterialTopTabNavigator(
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
		tabBarPosition: 'bottom',
		swipeEnabled: true,
		animationEnabled: true,
		tabBarOptions: {
			// shifting: true,
			activeTintColor: 'orange',
			inactiveTintColor: 'grey',
			style: {
				backgroundColor: '#f2f2f2',
				borderTopWidth: 0.5,
				borderTopColor: 'grey',
			},
			indicatorStyle: {
				height: 1,
			},
			showIcon: true,
		},
	},
));