import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#B0C182',
  },
  containerDone: {
    margin: 5,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#7EACC2',
  },

  taskText: {
    fontWeight: 'bold',
  },
  taskDone: {
    fontWeight: 'bold',
    color: 'grey',
    textDecorationLine: 'line-through',
  },
});
