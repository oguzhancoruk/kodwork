import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import stack from "./Stack";
import Fav from './NavigationFav';

const Drawer=createDrawerNavigator();
function Root() 
{
  return(
  <Drawer.Navigator>  
      <Drawer.Screen name='stack' component={stack} options={{ headerShown: false,
          title: 'JOBS',drawerActiveTintColor:'red'}} />
  
  <Drawer.Screen name='fav' component={Fav} options={{title:'FAVORİTE JOBS'
   ,headerShown: false,drawerActiveTintColor:'red'}} />
  


  </Drawer.Navigator> 
  );
}
export default Root;