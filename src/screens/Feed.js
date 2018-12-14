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

class Feed extends Component {
    render() {
        const { navigation: { navigate } } = this.props;

        return (
            <View style={styles.container}>
                <Text>Feed</Text>
            </View>
        );
    }
}
export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});