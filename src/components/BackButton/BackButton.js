import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './BackButton.style';

const BackButton = ({onPress})=>
{ 
    return(
  <TouchableOpacity style={styles.container} onPress={onPress}> 
    <Text style={styles.title}> GERİ </Text>
  </TouchableOpacity>
  );
}
export default BackButton;