import { View, StyleSheet} from 'react-native'
import React from 'react'
import Inputgoal from './inputgoal';
import Goals from './goalview';

const style = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    

  },
  
 
});


const app = () => {


const [goalarray,setgoalarray]= React.useState([]);
const [goalinput,setgoalinput]= React.useState({});
const [goalid, setgoalid] = React.useState(0);

function addhandler(goal){
  setgoalid(goalid+1);
  setgoalarray(goalarray => [...goalarray,{id :goalid , text : goal}]);
}
function textinputhandler(text) {
  setgoalinput(text);
  
}
function deletehandler(id){
  setgoalarray(goalarray.filter(goal => goal.id !== id));
}

  return (
    <View style={style.container}> 


    <Inputgoal  textinputhandler = {textinputhandler}  
    addhandler = {addhandler}
    goalinput = {goalinput}
    />
     
    <Goals   
    goalarray = {goalarray}
    deletehandler = {deletehandler}
    
    />
     
    </View>
    
  )
}



export default app