import React, { Component } from 'react';
import {
	createSwitchNavigator,
	createAppContainer,
	createStackNavigator,
	createMaterialTopTabNavigator,
	createDrawerNavigator,
} from 'react-navigation';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';

class Home extends Component {
    render() {
        const { navigation: { navigate } } = this.props;

        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});