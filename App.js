import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './src/reducers/rootReducer.js';

/* components */
import { YellowBox } from 'react-native';

const
	initialState = {
		count: 0,
	},
	store = createStore(
		rootReducer,
		initialState,
	);
	
/* components */
import App from './src/App.js';

class ReduxApp extends Component {
	render() {
		
		return <Provider store={store}>
			<App/>
		</Provider>
	}
}

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Remote debugger']);
export default ReduxApp;