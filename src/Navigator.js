import { createAppContainer, createSwitchNavigator } from 'react-navigation';

/* screens */
import Home from './screens/Home';
import Mail from './screens/Mail';
import Password from './screens/Password';

const HomeSwitchNavigator = createSwitchNavigator({
    Home,
    Mail,
    Password,
});

export default createAppContainer(HomeSwitchNavigator);