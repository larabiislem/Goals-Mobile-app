import React from "react";
import { View , StyleSheet , Text, TextInput , Button} from "react-native";


const style =StyleSheet.create({
    goal_input :
  {
    display :'flex',
    alignItems : 'center',
    flexDirection:'row',
    marginTop :20,
    paddingLeft:20,
    paddingRight :20,
    flex:1
 


  },
  text_input:{
    borderWidth :2,
    borderRadius :10,
    borderColor :'black',
    borderStyle :'solid',
    paddingTop :10,
    paddingBottom:10,
    fontSize :16,
    paddingLeft:10,
    flex:4,

  },
  button_container : {
    flex:1,
    marginLeft : 50,
    borderRadius :10

  }
});



export default function Inputgoal(props) {

return(
    <View style={style.goal_input}>
      <TextInput placeholder='Add goals her........' style={style.text_input} onChangeText={props.textinputhandler} >   </TextInput>
      <View style={style.button_container} >
      <Button  title='Add' onPress={() => props.addhandler(props.goalinput)}/>
      </View>
      
     </View>
);
}