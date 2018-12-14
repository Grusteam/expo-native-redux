import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, YellowBox } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';

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
			{ test, navigation: { openDrawer } } = this.props;
			
		return  <View style={{flex: 1}}>
			<Header>
				<Left>
					<Icon
						name="menu"
						onPress={openDrawer}
					/>
				</Left>
			</Header>

			<View style={styles.container}>
				<Text>LocalStateApp</Text>
				
				<TouchableOpacity onPress={() => this.changeCount.bind(this)(1)}>
					<Text>{test || '+'}</Text>
				</TouchableOpacity>
				
				<Text style={styles.color}>{count}</Text>
					
				<TouchableOpacity onPress={() => this.changeCount.bind(this)(-1)}>
					<Text>-</Text>
				</TouchableOpacity>
			</View>
		</View>
	}
}