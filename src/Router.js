import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

/* components */
import LocalStateApp from './components/LocalStateApp.js';
import ReduxStateApp from './components/ReduxStateApp.js';

export default createAppContainer(createDrawerNavigator({
	Local: {
		screen: LocalStateApp,
	},
	Redux: {
		screen: ReduxStateApp,
	},
}));