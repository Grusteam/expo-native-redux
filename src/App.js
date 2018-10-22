import React, { Component } from 'react';
import {  } from 'redux';
import {  } from 'react-redux';

import styles from './styles/App.js';

/* components */
import { View } from 'react-native';

/* components */
import LocalStateApp from './components/LocalStateApp.js';
import ReduxStateApp from './components/ReduxStateApp.js';

class App extends Component {
	render() {
		return <ReduxStateApp test={'+'}/>
	}
}

export default App;