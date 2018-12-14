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

class Goals extends Component {
    render() {
        const { navigation: { navigate } } = this.props;

        return (
            <View style={styles.container}>
                <Text>Goals</Text>
            </View>
        );
    }
}
export default Goals;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});