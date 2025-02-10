import React from "react";
import { View , StyleSheet , Text, FlatList , Pressable} from "react-native";

const style = StyleSheet.create({


    goals_container:
  {
    backgroundColor:'#CFFAFA',
    height : '80%' ,
    padding :20,
    margin: 20,
    borderRadius :30
   

  },
  goal_title :{
    fontSize :30,
    fontWeight :'bold',
    color :'black',
    margin :5,


  },
  goal :{
    
    color :'black',
    margin :5,
    backgroundColor :'#FCFFC4',
  
    borderRadius :6,
    borderWidth :1,
    borderColor :'black',
    borderStyle :'solid',
  },
  goal_text :{
    fontSize :20,
    padding: 5
  },
  stylepressed : {
    opacity:0.4
  }
});


export default function Goals(props) {
    return(

        <View style={style.goals_container}>
      
     
        <Text style={style.goal_title}> My Goals :  </Text>
        
        <FlatList  data={props.goalarray} renderItem={(goalitem)=>{
          return (
            
              <View key={goalitem.item} style={style.goal}>
              <Pressable style={(press) => [ press.pressed && style.stylepressed ] }
                onPress={props.deletehandler.bind(this , goalitem.item.id)}
                >
              <Text style={style.goal_text}> {goalitem.item.text} </Text>
              </Pressable>
              
                </View>

            
            
            
           
          );
        }} />

       
      </View>
    );
    
}