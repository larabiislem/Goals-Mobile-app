import { View, Text, StyleSheet ,Button,TextInput } from 'react-native'
import React from 'react'

const style = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    

  },
  goal_input :
  {
    display :'flex',
    alignItems : 'center',
    flexDirection:'row',
    marginTop :20,
    paddingLeft:20,
    paddingRight :20,
 


  },
  text_input:{
    borderWidth :2,
    borderRadius :10,
    borderColor :'black',
    borderStyle :'solid',
    padding :10,
    fontSize :16,
    flex:4,

  },
  button_container : {
    flex:1,
    marginLeft : 50,
    borderRadius :10

  },
  goals_container:
  {
    borderTopColor: 'black',
    borderTopWidth: 2,
    padding :20,
    marginTop :20,
   

  }

});










const app = () => {


const [goalarray,setgoalarray]= React.useState([]);
const [goalinput,setgoalinput]= React.useState('');

function addhandler(goal){
  setgoalarray(goalarray => [...goalarray,goal]);
}
function textinputhandler(text) {
  setgoalinput(text);
  
}
const goal = goalarray.map(val => <Text key={val}>{val}</Text>)
  return (
    <View style={style.container}> 
     <View style={style.goal_input}>
      <TextInput placeholder='Add goals her........' style={style.text_input} onChangeText={textinputhandler} >   </TextInput>
      <View style={style.button_container} >
      <Button  title='Add' onPress={() => addhandler(goalinput)}/>
      </View>
      
     </View>
     <View style={style.goals_container}>
      <Text> My Goals :  </Text>
      <View>{goal}</View>
     
     </View>
     
    </View>
    
  )
}



export default app