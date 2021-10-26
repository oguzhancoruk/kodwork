import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
 container:
 {
   borderWidth:2,
   margin:8,
   padding:5,
   borderRadius:10,
   borderColor:'gray'
   
 },
 title_job:
 {
   fontSize:20,
   fontWeight:'bold',
   color:'black',

 },
 title_company:
 {
   fontSize:15,
   color:'black',

 },
 in_container:
 { marginTop:2,
   flexWrap:'wrap'
 },
 title_locations:
 {
   backgroundColor:'#FF5C58',
   borderRadius:25,
   textAlign:'center',
   padding:5,
   },
   level:
   {
     textAlign:'right',
     color:'#FF5C58',
     fontWeight:'bold',

     
   }
 
});