import React from 'react';
import { Text, View,TextInput , StyleSheet, TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
import firebase from "firebase"
import db from "../config"
import MyHeader from '../components/Myheader'

export default class WriteStory extends React.Component{
    constructor(){
        super()
        this.state={
            storyName:'',
         story:'',
         userId:firebase.auth().currentUser.email,
         gnre:''
        }
    }

    addStory=(name, genre, story)=>{
        db.collection("stories").add({
            author: this.state.userId,
            story_id: Math.random().toString(36).substring(7),
            story_name: name,
            story_genre:genre,
            story:story
        })
        alert("Successfully saved the story")
    }

    render(){
        return(
            <View>
               
                <MyHeader title="Write Story" navigation ={this.props.navigation}/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput 
                     style ={styles.formTextInput}
                    placeholder="Enter the story name"
                    onChangeText={(text)=>{
                        this.setState({storyName: text})
                    }}
                    value={this.state.storyName}
                    />

                     <TextInput 
                     style ={styles.formTextInput}
                    placeholder="Gnre of the Story"
                    onChangeText={(text)=>{
                        this.setState({gnre: text})
                    }}
                    value={this.state.gnre}
                    />

                  
                    <TextInput
                     style ={[styles.formTextInput, {height:300}]}
                    placeholder="Write your complete story"
                    multiline={true}
                    onChangeText={(text)=>{
                        this.setState({story: text})
                    }}
                    value={this.state.story}
                    />

                    <TouchableOpacity
                     style={styles.button}
                     onPress={()=>{
                         this.addStory(this.state.storyName,this.state.gnre,this.state.story)
                     }}
                     >
                      <Text>Save Your Story</Text>  
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
        },


})