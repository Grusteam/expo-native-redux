import React, { Component } from 'react';
import {  } from 'redux';
import {  } from 'react-redux';

import styles from './styles/App.js';

/* native components */
import {
	View,
	WebView,
	StatusBar,
	BackHandler,
	SafeAreaView,
} from 'react-native';

class App extends Component {
	constructor(props) {
		super();
		
		console.log('props', props);

		this.navigationStateChange = this.navigationStateChange.bind(this);
		this.backHandler = this.backHandler.bind(this);
	}

	componentDidMount() {
		StatusBar.setHidden(true);

		BackHandler.addEventListener('hardwareBackPress', this.backHandler);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
	}

	/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

	backHandler = () => {
		const webviewRef = this.refs['WEBVIEW_REF'];
		
		webviewRef.goBack();
		return true;
    }

	navigationStateChange(navState) {
		const
			{ canGoBack, title, url, loading } = navState,
			webviewRef = this.refs['WEBVIEW_REF'];

		// console.log('navState', navState);

		if (canGoBack) {
			// console.log(1);
			setTimeout(() => {
				// console.log(2);
				webviewRef.goBack();
			}, 10000);
		}
	}
	
	render() {
		const { navigationStateChange } = this;

		return (
			<WebView
				ref={"WEBVIEW_REF"}
				source={{uri: 'https://app.iki.ai'}}
				useWebKit={true}
				style={{  }}
				onNavigationStateChange={navigationStateChange}
			/>
		);
	}
}

export default App;