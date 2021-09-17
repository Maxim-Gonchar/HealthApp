import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { textColor } from "../THEMES"

export const Details = ({ route }) => {
  const name = route.params.name;
  const time = route.params.time;
  const days = [
    { title: "Пн", key: Date.now() },
    { title: "Вт", key: Date.now() },
    { title: "Ср", key: Date.now() },
    { title: "Чт", key: Date.now() },
    { title: "Пн", key: Date.now() },
    { title: "Сб", key: Date.now() },
    { title: "Вс", key: Date.now() },
  ];
  // { backgroundColor: item.active ? "blue" : "white" }
  return (
    <View style={styles.container}>
      <View style={styles.nameTextContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Принимать каждый день в {time}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>В какие дни нужно примать лекарства?</Text>
      </View>
      <View style={styles.dayContainer}>
        {days.map((item, key, activity) => {
          return (
            <TouchableOpacity style={activity ? styles.days : styles.activeDays} onPres={() => setActive(!active)} key={key}>
              <Text>{item.title}</Text>
            </TouchableOpacity>)
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: "5%",
  },
  text: {
    fontSize: 32,
    color: textColor,
  },
  nameTextContainer: {
    alignItems: "center",
    textAlign: "center",
    marginBottom: "10%",
    padding: "10%",
  },
  textContainer: {
    alignItems: "center",
    textAlign: "center",
    marginBottom: "10%",
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  days: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
  },
  activeDays: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "blue",
  }
})


