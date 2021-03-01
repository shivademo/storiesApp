import React from 'react';
import { Text, View ,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from "firebase"
import db from "../config"
import MyHeader from '../components/Myheader'



export default class ReadStory extends React.Component {

  constructor(){
    super()
    this.state={
      storiesList:"",
      userId: firebase.auth().currentUser.email
    }

    this.requestRef = null
  }

  getRequestedStoriesList=()=>{
    this.requestRef = db.collection("stories")
    .onSnapshot((snapshot)=>{
      var list = snapshot.docs.map((doc) => doc.data())
      this.setState({
        storiesList : list
      });
    })
  }

  componentDidMount(){
    this.getRequestedStoriesList()
   
  }

renderItem=({item,i})=>{
  return (
    <ListItem
        key={i}
        title={item.story_name}
        subtitle={item.author}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}
              onPress ={()=>{
                //this.props.navigation.navigate("RecieverDetails",{"details": item})
              }}
              >
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          } 
        bottomDivider
      />
  )
}


    render() {
      return (
        <View>
        <MyHeader title="Read Story" navigation ={this.props.navigation}/>
        <View>
          {
            this.state.storiesList.length===0 
            ?(
              <View><Text>List of stories</Text></View>
            ):
            (
              
              <FlatList 
              data={this.state.storiesList} 
              renderItem={this.renderItem} 
              keyExtractor={(item, index) => index.toString()
              } />
            )
          }
          
        </View>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })