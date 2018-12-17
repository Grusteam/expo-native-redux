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
import Navigator from './src/Navigator.js';

type Props = {};

class ReduxNavigator extends Component<Props> {
  render() {
    const {  } = this.props;
    
    return <Provider store={store}>
      <Navigator/>
    </Provider>
  }
}

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Remote debugger']);
export default ReduxNavigator;