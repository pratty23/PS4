import React, { useEffect, useState } from "react";
//import axios from "axios";
import openImagePickerAsync from '../imagePicker';
import {styles} from '../styles';
import {Image, StyleSheet, Button, Text, Pressable, View, TouchableOpacity, FlatList} from "react-native";


export default function InitialScreen(props) {
  return(
  <View style={styles.container}>
  // need to edit this to add the search function and display rankings
    <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
    <Text style={styles.instructions}>
      Welcome To Simply Music!
      We Will Get Ya What Ya Need!
    </Text>

    <Pressable
      hitSlop={30}
      onPress={ async () => {
          let image = await openImagePickerAsync();
          image ? props.setImage(image) : null
          }
      }
      style={styles.button}>
      <Text style={styles.buttonText}>Pick a photo</Text>
    </Pressable>
  </View>
  )
}

