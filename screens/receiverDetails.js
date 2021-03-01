import React from 'react';
import { Text, View,TextInput , StyleSheet, TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
import firebase from "firebase"
import db from "../config"
import MyHeader from '../components/MyHeader'


export default class Receiver extends React.Component{
    render(){
        return(
            <View>
                <Text>Receiver's Details</Text>
            </View>
        )
    }
}
