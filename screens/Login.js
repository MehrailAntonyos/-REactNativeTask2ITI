import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(props) {


  console.log(props)
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("mount");
    console.log("get login from local storage");
    getStorage();
  }, [])

  useEffect(() => {
    console.log("update");
    setstorage();
  }, [input])

  async function setstorage() {
    await AsyncStorage.setItem("token", JSON.stringify(input));
  }

  async function getStorage() {


    var arr = await AsyncStorage.getItem("token");
    console.log(arr);
    arr = JSON.parse(arr);

    setInput([arr]);
  }

  // task1
  var isLogged;
  if (getStorage()) {
    isLogged = true;
  }

  function change(input) {
    setInput(input);
  }
  function setData() {
    // props.navigation.navigate("Home", { username: "ahmed" })
    // if(getStorage()){
      props.navigation.navigate("Home", input)
    // }
    // else{
    //   props.navigation.navigate("Login")
    // }
  }
  return (
    <View style={styles.con}>
      <Text style={styles.txt}>Login</Text>
      <TextInput style={[styles.input, styles.in2]}
        value={input}
        onChangeText={change}
        placeholder='enter your name' />
      <Button title='press' onPress={setData}></Button>

    </View>
  )
}

const styles = StyleSheet.create({
  con:
  {
    margin: 20,
    backgroundColor: "white"
  },
  txt:
  {
    fontSize: 30,
    color: "orange",

  },
  input:
  {
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
  },
  in2: {
    backgroundColor: 'green'
  }

})