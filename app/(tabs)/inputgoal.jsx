import React from "react";
import { View , StyleSheet , Text, TextInput , Button , Modal,Image} from "react-native";
import goal_img from'../../assets/images/goal.png'


const style =StyleSheet.create({
    goal_input :
  {
   backgroundColor:'#1e085a',
   height:'100%',
   display:'flex',
   justifyContent:'center',
   
  },
  text_input:{
    borderWidth :2,
    borderRadius :10,
    borderColor :'black',
    borderStyle :'solid',
    paddingTop :20,
    paddingBottom:20,
    fontSize :16,
    paddingLeft:10,
    backgroundColor :'#D3B8FF',
    margin :10
    

  },
  button_container_add :{
    backgroundColor : '#E7D9FF',
    marginRight :20,
    width:100,
    height:50,
    paddingTop :5,
    borderRadius :6
    
    
  },
  button_container :{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    padding:10,
    marginTop :25

  },
  button_container_cancel :{
    backgroundColor : '#FF8383',
    marginRight :20,
    width:100,
    height:50,
    paddingTop :5,
    borderRadius :6

  },
  goal_image:{
    width:120,
    height:120,
    marginLeft:150,
    marginBottom :40


  }

});



export default function Inputgoal(props) {

return(

   
    <Modal visible={props.isvisible} animationType="fade" >
     <View style={style.goal_input}>
      <Image  source={goal_img} style={style.goal_image}/>
      <TextInput placeholder='Add goals her........' style={style.text_input} onChangeText={props.textinputhandler} >   </TextInput>
      <View style={style.button_container} >
      <View style={style.button_container_add} >
      <Button  title='Add' onPress={() => props.addhandler(props.goalinput)} color={'black'}/>
      </View>
      <View style={style.button_container_cancel}>
      <Button title="cancel" color="black" onPress={props.cancel} />
      </View>
      
     </View>

      </View>
      

  </Modal>
   
);
}