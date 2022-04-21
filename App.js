
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Notification from "expo-notifications";
import moment from 'moment'

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});


export default function App() {

  const [Time, setTime] = useState('');
  const [scedhule, setschedhule] = useState('');

  let testing = true

  useEffect(() => {

    const repeat = setInterval(() => {
      var date = moment().utcOffset('+07:00').format(' hh:mm:ss a');
      setTime(date);
    }, 0)

    if (Time.toLocaleLowerCase() === ' 06:30:00 AM') {
      setschedhule('Bangun Pagi')
      console.log(Time)
      handleNotification();
    }
    if (Time.toLocaleLowerCase() === ' 07:00:00 AM') {
      setschedhule('Waktu Olahraga')
      console.log(Time)
      handleNotification();

    }
    if (Time.toLocaleLowerCase() === ' 08:00:00 AM') {
      setschedhule('Sarapan')
      console.log(Time)
      handleNotification();

    }
    if (Time.toLocaleLowerCase() === ' 12:08:00 PM') {
      setschedhule('Waktunya Tidur Siang')
      console.log(Time)
      handleNotification();

    }
    if (Time.toLocaleLowerCase() === ' 01:00:00 PM') {
      setschedhule('Makan Siang')
      console.log(Time)
      handleNotification();

    }

  })


  const handleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Scedhule Liburan",
        body: scedhule,
      },
      trigger: {
        seconds: 10,
      },
    });
  };
  return (
    <View style={styles.container}>
      <View style = {styles.halu}></View>

      <Text>{Time.toLocaleLowerCase()}</Text>
      <View style={styles.row}>

        <View>
          <Text>Bangun Pagi</Text>
          <Text>Waktu Olahraga</Text>
          <Text>Sarapan</Text>
          <Text>Tidur Siang</Text>
          <Text>Makan Siang</Text>
        </View>
        <View>
          <Text>04:42:00 am</Text>
          <Text>12:00:00 pm</Text>
          <Text>03:18:00 pm</Text>
          <Text>03:54:00 pm</Text>
          <Text>07:08:00 pm</Text>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF9999",
    alignItems: "left",
    justifyContent: "left",
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch'
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '50%' 
  },

});