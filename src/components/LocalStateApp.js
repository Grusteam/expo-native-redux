import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, YellowBox } from 'react-native';

import styles from '../styles/LocalStateApp.js';

export default class LocalStateApp extends Component<Props> {
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
			{ test } = this.props;
			
		return  <View style={styles.container}>
			<Text>LocalStateApp</Text>
			
			<TouchableOpacity onPress={() => this.changeCount.bind(this)(1)}>
				<Text>{test}</Text>
			</TouchableOpacity>
			
			<Text style={styles.color}>{count}</Text>
				
			<TouchableOpacity onPress={() => this.changeCount.bind(this)(-1)}>
				<Text>-</Text>
			</TouchableOpacity>
		</View>
	}
}