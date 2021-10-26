import React,{useEffect,useState} from "react";
import { View,ScrollView ,FlatList ,ActivityIndicator } from "react-native";
import JobsCard from "../../components/jobsCard/JobsCard";
import useFetch from '../../Hooks/useFetch/useFetch';
import Config from "react-native-config";
import PageButton from "../../components/PageButton/PageButton";
import BackButton from '../../components/BackButton/BackButton';
import styles from './Jobs.style';
 
const Jobs = ({navigation}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    page;
  }, []);
  

  const{data}=useFetch(`${Config.API_URL}?page=${page}`)
 
  const handlePage = () => {
    setPage(page + 1);
  };
 
  const BackPage = () => {
   
    setPage(page - 1);
    if(page==1)
 setPage(page+0)
  };
   
  const handleJobSelect = (id, levels) => {
    navigation.navigate('DETAİL', {id, levels});
  };
  
    const renderUser=({item})=><JobsCard job={item}  onSelect={() => handleJobSelect(item.id, item.levels)}/>
  
    return (
      <View style={styles.container}>
       <FlatList data={data.results} renderItem={renderUser} 
      /> 
      <View style={styles.button_container}>
      

      
    <BackButton  Text='geri' onPress={BackPage} />  
    <PageButton   Text='ileri' onPress={handlePage} />
       
       </View>
       </View>
    );
  };
  
  export default Jobs;