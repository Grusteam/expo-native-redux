import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '../styles/ReduxStateApp.js';

/* components */
import { Text, View, TouchableOpacity, Button } from 'react-native';

class ReduxStateApp extends Component {
	static navigationOptions = {
		// header: null,
	}

	changeCount(arg) {
		const
			{ changeCountDispatcher } = this.props, /* redux dispatch */
			{ count } = this.props, /* redux states */
			nextCount = count + arg;
			
		changeCountDispatcher(nextCount);
	}
	
	render() {
		const
			{ test, navigation: { navigate } } = this.props, /* native */
			{ changeCountDispatcher } = this.props, /* redux dispatch */
			{ count } = this.props; /* redux states */
			
		return  <View style={styles.container}>
			<Text style={styles.title}>ReduxStateApp</Text>
			
			<TouchableOpacity
				style={styles.controller}
				onPress={() => this.changeCount.bind(this)(1)}
			>
				<Text style={styles['controller-text']}>
					{test || '+'}
				</Text>
			</TouchableOpacity>
			
			<Text style={styles.red}>{count}</Text>
				
			<TouchableOpacity
				style={styles.controller}
				onPress={() => this.changeCount.bind(this)(-1)}
			>
				<Text style={styles['controller-text']}>
					-
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigate('LocalStateApp')}
			>
				<Text style={styles.butt}>
					go to to LocalStateApp
				</Text>
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