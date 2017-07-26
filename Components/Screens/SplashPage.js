import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SplashPage extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Batman</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Powered by React-Native</Text>
                </View>
            </View>
        );
    }
}
/* Navigator
export default class SplashPage extends Component {
	componentWillMount () {
		var navigator = this.props.navigator;
		setTimeout (() => {
		navigator.replace({
				id: 'LoginPage',
			});
		}, 2000);
	}

	render () {
		return (
			<Splash/>
		);
	}
}
*/

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#3498db',
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    title:{
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    subtitle:{
        color:'white',
        fontWeight:'200',
        paddingBottom: 20,
    },
    titleWrapper:{
        justifyContent:'center',
        flex: 1,
    },
})



















