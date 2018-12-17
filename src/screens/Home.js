import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class Home extends Component {
    render() {
    const { navigation: { navigate } } = this.props;
    
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <TouchableOpacity onPress={() => navigate('Mail')}>
                    <Text>Mail</Text>
                </TouchableOpacity>
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