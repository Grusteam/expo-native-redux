import React, { Component } from 'react';
import styles from '../styles/LocalStateApp.js';

/* components */
import { Platform, StyleSheet, Text, View, TouchableOpacity, YellowBox, Button } from 'react-native';

export default class LocalStateApp extends Component {
	static navigationOptions = {
		// header: null,
	}

	state = {
		count: 0,
	}
	
	changeCount(arg) {
		console.log('arg, this', arg, this);
		const { count } = this.state;
		
		this.setState({
			count: count + arg,
		});
	}
	
	render() {
		const
			{ count } = this.state,
			{ test, navigation: { navigate } } = this.props;

		console.log('navigate', navigate);
			
		return  <View style={styles.container}>
			<Text style={styles.title}>LocalStateApp</Text>
			
			<TouchableOpacity
				style={styles.controller}
				onPress={() => this.changeCount.bind(this)(1)}
			>
				<Text style={styles['controller-text']}>
					{test || '+'}
				</Text>
			</TouchableOpacity>
			
			<Text style={styles.color}>{count}</Text>
				
			<TouchableOpacity
				style={styles.controller}
				onPress={() => this.changeCount.bind(this)(-1)}
			>
				<Text style={styles['controller-text']}>
					-
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigate('ReduxStateApp')}
			>
				<Text style={styles.butt}>
					go to to ReduxStateApp
				</Text>
			</TouchableOpacity>
		</View>
	}
}