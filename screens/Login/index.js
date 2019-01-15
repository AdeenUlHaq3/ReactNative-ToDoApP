import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, Text } from 'react-native';

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    login = () => {

    };

    render() {
        return (
            <View>
                <View><Text>AVC</Text></View>
                <TouchableOpacity onPress={this.login}>
                    <Text>ABC</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

});
