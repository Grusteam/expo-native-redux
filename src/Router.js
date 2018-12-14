import React, { Component } from "react";
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { 
	SafeAreaView,
	View,
	ScrollView,
	Text,
	StyleSheet
} from "react-native";

import LocalStateApp from './components/LocalStateApp.js';
import ReduxStateApp from './components/ReduxStateApp.js';

const contentComponent = props => {
	return <SafeAreaView>
		<Text style={{marginBottom: 20}}>
			Это меню
		</Text>
		<DrawerItems {...props} />
	</SafeAreaView>
};

const Router = createAppContainer(createDrawerNavigator(
	{
		Local: {
			screen: LocalStateApp,
		},
		Redux: {
			screen: ReduxStateApp,
		},
	},
	{
		contentComponent,
	},
));

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default Router;