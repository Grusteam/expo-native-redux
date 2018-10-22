import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/ReduxStateApp.js';

class ReduxStateApp extends Component<Props> {
	changeCount(arg) {
		const
			{ changeCountDispatcher } = this.props, /* redux despatchers */
			{ count } = this.props, /* redux states */
			nextCount = count + arg;
			
		changeCountDispatcher(nextCount);
	}
	
	render() {
		const
			{ test } = this.props, /* native */
			{ changeCountDispatcher } = this.props, /* redux despatchers */
			{ count } = this.props; /* redux states */
			
		return  <View style={styles.container}>
			<Text>ReduxStateApp</Text>
			
			<TouchableOpacity onPress={() => this.changeCount.bind(this)(1)}>
				<Text>{test}</Text>
			</TouchableOpacity>
			
			<Text style={styles.red}>{count}</Text>
				
			<TouchableOpacity onPress={() => this.changeCount.bind(this)(-1)}>
				<Text>-</Text>
			</TouchableOpacity>
		</View>
	}
}

const
	mapStateToProps = ({ count }) => {
		return {
			count,
		};
	},
	mapDispatchToProps = dispatch => {
		return {
			changeCountDispatcher: (count) => dispatch({type: 'CHANGE_COUNT', count}),
		};
	};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxStateApp)