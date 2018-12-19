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
	componentDidMount() {
		StatusBar.setHidden(true);

		BackHandler.addEventListener('hardwareBackPress', this.backHandler);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
	}

	backHandler = () => {
		const webviewRef = this.refs['WEBVIEW_REF'];
		
		webviewRef.goBack();
		return true;
    }

	navigationStateChange({ canGoBack, title, url }) {
		console.log('canGoBack, title, url', canGoBack, title, url);
	}
	
	render() {
		return (
		<SafeAreaView>
			<WebView
				ref={"WEBVIEW_REF"}
				source={{uri: 'https://app.iki.ai'}}
				useWebKit={true}
				allowsBackForwardNavigationGestures={true}
				style={{  }}
				onNavigationStateChange={this.navigationStateChange.bind(this)}
			/>
		</SafeAreaView>
		);
	}
}

export default App;
		
/* return <ReduxStateApp test={'+++++'}/> */
{/* <StatusBar hidden /> */}