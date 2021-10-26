import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorite from '../pages/Favorite/Favorite';

const Stack = createNativeStackNavigator();

function Fav() 
{

  return(

      <Stack.Navigator>
        <Stack.Screen name='FAVORİTE JOBS' component={Favorite} options={{headerTitleAlign:'center',
        headerTintColor:'#FF5C58' 
        
        }} /> 
      
      </Stack.Navigator>
    
  );

}

export default Fav;