import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends Component{
   render(){
       return(
           <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../Images/wallpapercropped.jpg')} />
                    <Text style={styles.title}>An app made by Agentzhao using React Native</Text>
                </View>
                <View styles={styles.formContainer}>
                    <LoginForm />
                </View>
           </KeyboardAvoidingView>
       );
   }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7d7e83',
    },
    logo:{
        height: 280,
        width: 280,
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    title:{
        color: '#FFF',
        marginTop: 10,
        width: 180,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 13
    }
});


















