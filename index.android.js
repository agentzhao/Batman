import React, { Component } from 'react';

import {
	AppRegistry,
} from 'react-native';

import SplashPage from './Components/Screens/SplashPage';
import LoginPage from './Components/Login/LoginPage';
import { Tab } from './Components/Router';

//test
import Hitormiss from './Components/Screens/WebPage';
import Data from './Components/Screens/Data';


class batman extends Component {
  constructor(props){
    super(props);
    this.state = {
      timePassed: false,
	  timetimePassed: false,
    };
  }

  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 2000);
    setTimeout(() => {this.setState({timetimePassed: true})}, 10000);

	
    if (!this.state.timePassed){
      return <SplashPage/>;
    }else if (!this.state.timetimePassed){
      return <LoginPage/>;
    }else{
		return <Tab/>;
	}
  }
}
/*
const styles = StyleSheet.create({
  defaultText:{
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black',
  },
  selectedText:{
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDD',
    justifyContent: 'space-around',
  }
})
*/

var RCTLog = require('RCTLog');
AppRegistry.registerComponent('batman', () => batman);
