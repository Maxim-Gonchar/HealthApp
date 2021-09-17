import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { textColor } from "../THEMES.js"

export const Greetings = () => {
  const name = "Eugen";
  const time = new Date;
  let dayTime;
  if (time.getHours() > 5 && time.getHours() < 12) {
    dayTime = "Доброе утро";
  } else if (time.getHours() > 11 && time.getHours() < 18) {
    dayTime = "Добрый день";
  } else if (time.getHours() > 17 && time.getHours() < 24) {
    dayTime = "Добрый вечер";
  } else if (time.getHours() >= 0 && time.getHours() < 6) {
    dayTime = "Доброй ночи";
  }
  return (
    <View>
      <Text style={styles.text}>{dayTime}, {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: textColor
  }
});