import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class Mail extends Component {
    render() {
        const { navigation: { navigate } } = this.props;

        return (
            <View style={styles.container}>
                <Text>Mail</Text>
                <TouchableOpacity onPress={() => navigate('Password')}>
                    <Text>Password</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Mail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});