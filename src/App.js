import { createStackNavigator, createAppContainer } from 'react-navigation';

/* components */
import LocalStateApp from './components/LocalStateApp.js';
import ReduxStateApp from './components/ReduxStateApp.js';

const MainNavigator = createStackNavigator({
	LocalStateApp,
	ReduxStateApp,
});


export default createAppContainer(MainNavigator);