import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Greetings } from './Greetings';
import { textColor } from "../THEMES"
import { Icons } from './Icons';


export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoAndText}>
        <View style={styles.photoContainer}>
          <Image source={require("../Images/dead.jpg")} style={styles.image} />
        </View>
        <View>
          <Greetings />
        </View>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.text}>Как ваше самочувствие?</Text>
      </View>
      <Icons />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: "5%",
  },
  image: {
    width: 120,
    height: 150,
  },
  photoContainer: {
    marginRight: 15,
  },
  photoAndText: {
    flexDirection: "row",
  },
  questionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "10%"
  },
  text: {
    color: textColor,
    fontSize: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  icon: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});