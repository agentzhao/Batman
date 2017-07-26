import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class Data extends Component{
	render(){
         return (
              <View style={styles.container}>
              <StatusBar hidden={false} />
					<TouchableOpacity style={styles.buttonContainer}>
						<Text style={styles.defaultText}>Total Male Residents: 1,929,526</Text>
                    </TouchableOpacity>
					
                    <TouchableOpacity style={styles.buttonContainer}>
						<Text style={styles.defaultText}>Total Female Residents: 2,004,033</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
					    <Text style={styles.defaultText}>
							Refresh
						</Text>
                    </TouchableOpacity>
				    <TouchableOpacity style={styles.buttonContainer}>
					    <Text style={styles.defaultText}
							onPress={() => Linking.openURL('https://data.gov.sg/dataset/resident-population-by-ethnicity-gender-and-age-group')}>
							More Info
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

