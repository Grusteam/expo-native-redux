import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

class Login extends Component {
    render() {
        const { navigation: { navigate } } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('Home')}>
				<Text>Login</Text>
			</TouchableOpacity>
            </View>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});