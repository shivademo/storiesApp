import React,{Component} from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStory from '../screens/readStory';
import WriteStory from '../screens/writeStory'

const AppTabNavigator = createBottomTabNavigator({
    ReadStory:{screen: ReadStory, navigationOptions:{
        /*  tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>, */
         tabBarLabel : "Read Story",}},
     WriteStory:{screen: WriteStory, navigationOptions:{
         /* tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>, */
       tabBarLabel : "Write Story",
     }} 
     
})

export default AppTabNavigator