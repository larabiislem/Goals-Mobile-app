import { View, StyleSheet , Button} from 'react-native'
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
const [isvisible,setisvisible ]= React.useState(false);


function addhandler(goal){
  setgoalid(goalid+1);
  setgoalarray(goalarray => [...goalarray,{id :goalid , text : goal}]);
  setisvisible(false);
}

function cancel() {
  setisvisible(false);
  
}

function textinputhandler(text) {
  setgoalinput(text);
  
}
function deletehandler(id){
  setgoalarray(goalarray.filter(goal => goal.id !== id));
}

function Addgoalshandller() {
  setisvisible(true);
  
}

  return (
    <View style={style.container}> 

    <Button title='Add New Goals' onPress={Addgoalshandller}/>
    <Inputgoal  textinputhandler = {textinputhandler}  
    addhandler = {addhandler}
    cancel={cancel}
    goalinput = {goalinput}
    isvisible ={isvisible}
    />
     
    <Goals   
    goalarray = {goalarray}
    deletehandler = {deletehandler}
    
    />
     
    </View>
    
  )
}



export default app