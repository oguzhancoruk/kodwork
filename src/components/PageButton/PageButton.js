import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './PageButton.style';

const PageButton = ({onPress})=>
{ 
    return(
  <TouchableOpacity style={styles.container}  onPress={onPress}> 
    <Text style={styles.title}> İLERİ </Text>
  </TouchableOpacity>
  );
}
export default PageButton;