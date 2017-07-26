import React, { Component } from 'react';
import { WebView, Linking, Text, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';


import Hyperlink from 'react-native-hyperlink';

class Button extends Component{
	render(){
		return(
			<TouchableOpacity 
				onPress={() => {this.props.onPress()}}
				style={styles.buttonContainer}>
				<Text style={styles.defaultText}>
					GPA Miner
				</Text>
            </TouchableOpacity>
		);
	}
}

export default class Hitormiss extends Component{
	constructor(){
		super();
		this.state = { taps: 0};
	}
	onTap = () => {
		this.setState({
			taps: this.state.taps+0.001
		})
	}
	
    render() {
         return (
              <View style={styles.container}>
              <StatusBar hidden={false} />
                <TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.defaultText}
						onPress={() => Linking.openURL('http://hit-or-miss-ccace.firebaseapp.com')}>
						Hit-or-Miss
					</Text>
                </TouchableOpacity>
				<Text style={styles.defaultText}>
					Your GPA is now: {this.state.taps}
				</Text>
				<Button onPress={() => { this.onTap()}}/>
              </View>
         );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1, //row in centre
        alignItems: 'center',
        flexDirection: 'column',
        //justifyContent: 'space-around', //(box spaced evenly on row)
        justifyContent: 'center', //(box fill entire row)
        backgroundColor: '#607d8b',
    },
    defaultText:{
        //flex: 1, //(box fill entire row)
        textAlign: 'center', //(box fill entire row)
        fontSize: 22,
        padding: 10,
        margin: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#cfd8dc',
        color:'#cfd8dc',
    },
    buttonContainer:{
        backgroundColor: '#607d8b',
        paddingVertical: 15,
    },
});