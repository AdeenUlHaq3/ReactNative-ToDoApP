import React from 'react';
import { Button } from 'react-native';
import firebase from '../../config/Firebase';

export default class Login extends React.Component {
    login = async () => {
        try {
            const {
                type,
                token
            } = await Expo.Facebook.logInWithReadPermissionsAsync('558885721189776', {
                permissions: ['public_profile', 'email'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?fields=id,name,picture.type(large),email,about&access_token=${token}`);

                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                firebase.auth().signInAndRetrieveDataWithCredential(credential)
                    .then(() => response.json())
                    .then(res => this.props.navigation.navigate('Home'))
                    .catch(error => console.log(error))
            }
            else { }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    };

    render() {
        return (
            <Button
                onPress={this.login}
                title='Facebook'
            >
            </Button>
        );
    }
}