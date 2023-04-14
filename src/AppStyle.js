import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  area: {
    backgroundColor: '#82C28D',
    flex: 1,
    padding: 10,
  },
  container: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    color: '#C24552',
    fontSize: 30,
    fontWeight: 'bold',
  },
  count: {
    color: '#C24552',
    fontSize: 30,
    fontWeight: 'bold',
  },
  flat: {
    paddingBottom: 170,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    width: '100%',
    height: 115,
    borderRadius: 15,
    backgroundColor: '#B0C182',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#82C28D',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
});
