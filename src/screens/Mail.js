import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

class Mail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Mail</Text>
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