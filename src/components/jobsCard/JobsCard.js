import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './JobsCard.style';

const JobsCard = ({job,onSelect}) => {
  return (
     <TouchableWithoutFeedback onPress={onSelect}>
     <View  style={styles.container}>
       <Text style={styles.title_job}>{job.name}</Text>
       <Text style={styles.title_company}>{job.company.name}</Text>
        <View style={styles.in_container}>
           <Text style={styles.title_locations}> {job.locations && job.locations.length > 0
                ? job.locations[0].name
                : 'No information'} </Text>
           </View>
             <View style={styles.levels_container}> 
               <Text style={styles.level}> {job.levels[0].name}</Text>
          
       </View>
     </View>
     </TouchableWithoutFeedback>
  );
};

export default JobsCard;