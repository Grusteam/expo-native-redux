import React, { Component } from 'react';
import {  } from 'redux';
import {  } from 'react-redux';
import { WebView, StatusBar, BackHandler } from 'react-native';

import styles from './styles/App.js';

/* components */
import { View } from 'react-native';

/* components */

class App extends Component {
	componentDidMount() {
		StatusBar.setHidden(true);

		BackHandler.addEventListener('hardwareBackPress', this.backHandler);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
	}

	backHandler = (e) => {
		console.log('e', e);

		if (!e) {
			this.refs['WEBVIEW_REF'].goBack();
			return true;
		}
    }
	
	render() {
		return <WebView
			ref={"WEBVIEW_REF"}
			source={{uri: 'https://app.iki.ai'}}
			style={{  }}
			onNavigationStateChange={this.backHandler.bind(this)}
		/>;
	}
}

export default App;
		
		
/* return <ReduxStateApp test={'+++++'}/> */
{/* <StatusBar hidden /> */}