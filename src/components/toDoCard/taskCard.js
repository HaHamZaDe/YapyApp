import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './taskCard.style';

const Task = props => {
  const [isClicked, setIsClicked] = useState(false);

  const onPress = () => {
    setIsClicked(!isClicked);
    props.isDone({index: props.index, isDone: !isClicked});
  };

  return (
    <View style={isClicked ? styles.containerDone : styles.container}>
      <TouchableOpacity onLongPress={props.deleteTask} onPress={onPress}>
        <Text style={isClicked ? styles.taskDone : styles.taskText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
