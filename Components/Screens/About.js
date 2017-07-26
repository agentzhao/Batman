import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';

import Hyperlink from 'react-native-hyperlink';

export default class About extends Component{
    render() {
         return (
              <View style={styles.container}>
              <StatusBar hidden={false} />
                    <TouchableOpacity
                       //onPress={playsound()}
                        style={styles.buttonContainer}>
                        <Text style={styles.defaultText}>Batman v1.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.defaultText}>Author: Tan Hong Zhao</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
					    <Text style={styles.defaultText}
							onPress={() => Linking.openURL('https://github.com/Agentzhao')}>
							Github: Agentzhao
						</Text>
                   </TouchableOpacity>
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

//var RCTLog = require('RCTLog');

