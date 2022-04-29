import { StyleSheet } from 'react-native';

//these are just from the example app, can fix to fit what we want to do
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    backgroundColor: '#689',
    borderColor: '#0000',
  },
  list2: {
    backgroundColor: '#669',
    borderColor: '#0000',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 3,
    color: 'red',
    backgroundColor: "blue",
    color: "red",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 10,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
