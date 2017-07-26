import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Hitormiss from './Screens/WebPage';
import Data from './Screens/Data';
import About from './Screens/About';
import Mrt from './Screens/Mrt';

export const Tab = TabNavigator({
	Mrt:{
		screen: Mrt,
		headerTintColor: 'blue',
		navigationOptions:{
			tabBarLabel: 'MRT'
		},
	},
	Data:{
		screen: Data,
		headerTintColor: 'blue',
		navigationOptions:{
			tabBarLabel: 'Data'
		},
	},
	Hitormiss:{
		screen: Hitormiss,
		headerTintColor: 'red',
		navigationOptions:{
			tabBarLabel: 'Hit-or-Miss'
		},
	},
	About:{
		screen: About,
		headerTintColor: 'red',
		navigationOptions:{
			tabBarLabel: 'About'
		},
	},
})

















































