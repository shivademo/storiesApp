import React from 'react';
import { Text, View } from 'react-native';
import firebase from "firebase";
import db from "../config";
import {createStackNavigator} from 'react-navigation-stack';
import RequestBooks from '../screens/writeStory';
import Receiver from '../screens/receiverDetails';

export const AppStackNavigator = createStackNavigator({
    Requestlist:{
        screen:RequestBooks
    },
    ReceiverList:{
     screen : Receiver
    }
},
{
    initialRouteName : 'Requestlist'
})



