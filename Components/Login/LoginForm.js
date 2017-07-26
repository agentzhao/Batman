import React, { Component } from 'react';
import {
    StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar,
} from 'react-native';

import Tab from '../Router';

export default class LoginForm extends Component{	
    render(){
       return(
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    />
                <TextInput
                    placeholder="Username or Email"
                    placeholderTextColor="#000000"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#000000"
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    />

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
            </View>
       );
   }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal:30,
    },
    buttonContainer:{
        backgroundColor: '#3498db',
        paddingVertical: 15,
    },
    buttonText:{
        textAlign:'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }

});




















