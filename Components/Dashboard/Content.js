import React, { useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { textColor } from "../THEMES.js"

export const SmileContent = () => {
  return (
    <View >
      <View style={[{ alignItems: "center", marginBottom: 10 }]}>
        <Text style={styles.text}>Попробуйте данные занятия</Text>
      </View>
      <View>
        <View style={[{ flexDirection: "row", justifyContent: "space-between" }]}>
          <View>
            <Image
              style={styles.photoShort}
              source={require("../Images/topic2cardbg.png")}
            />
          </View>
          <View>
            <Image
              style={styles.photoWide}
              source={require("../Images/yoga.png")}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export const MehContent = () => {
  return (
    <View>
      <View style={[{ alignItems: "center", marginBottom: 10 }]}>
        <Text style={styles.text}>Попробуйте данные занятия</Text>
      </View>
      <View>
        <View style={[{ flexDirection: "row", justifyContent: "space-between" }]}>
          <View>
            <Image
              style={styles.photoWide}
              source={require("../Images/relaxationimg.png")}
            />
          </View>
          <View>
            <Image
              style={styles.photoShort}
              source={require("../Images/topic5cardbg.png")}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export const SadContent = () => {
  return (
    <View>
      <View style={[{ alignItems: "center", marginBottom: 10 }]}>
        <Text style={styles.text}>Попробуйте данные занятия</Text>
      </View>
      <View>
        <View style={[{ flexDirection: "row", justifyContent: "space-between" }]}>
          <View>
            <Image
              style={styles.photoShort}
              source={require("../Images/topic3cardbg.png")}
            />
          </View>
          <View>
            <Image
              style={styles.photoWide}
              source={require("../Images/enjoy.png")}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: textColor,
    fontSize: 18,
  },
  photoShort: {
    width: 110,
    height: 150,
    borderRadius: 10,
    backgroundColor: "blue",
  },
  photoWide: {
    width: 170,
    height: 150,
    borderRadius: 10,
    backgroundColor: "blue",
  }
})