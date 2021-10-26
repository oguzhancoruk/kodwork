import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from '../pages/Jobs/Jobs';
import Detail from '../pages/Detail/Detail';
const Stack = createNativeStackNavigator();

function stack() 
{

  return(

      <Stack.Navigator>
        <Stack.Screen name='JOBS' component={Jobs} 
        options={{headerTitleAlign:'center',
        headerTintColor:'#FF5C58' 
        
        }} /> 
        <Stack.Screen name='DETAİL' component={Detail} options={{headerTitleAlign:'center',
        headerTintColor:'#FF5C58' 
        
        }} />
      </Stack.Navigator>
    
  );

}

export default stack;