import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class Password extends Component {
    render() {
        const { navigation: { navigate } } = this.props;

        return (
            <View style={styles.container}>
                <Text>Password</Text>
                <TouchableOpacity onPress={() => navigate('Main')}>
                    <Text>Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Password;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});