import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SmileContent } from "./Content"
import { MehContent } from "./Content"
import { SadContent } from "./Content"

export const Icons = () => {
  const [smileIcon, setSmileIcon] = useState(false);
  const [mehIcon, setMehIcon] = useState(false);
  const [sadIcon, setSadIcon] = useState(false);
  const smileShow = () => {
    setSmileIcon(!smileIcon);
    setMehIcon(false);
    setSadIcon(false);
  }
  const mehShow = () => {
    setMehIcon(!mehIcon);
    setSadIcon(false);
    setSmileIcon(false);
  }
  const sadShow = () => {
    setSadIcon(!sadIcon);
    setMehIcon(false);
    setSmileIcon(false);
  }

  return (
    <View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={[styles.icon, { backgroundColor: "green" }]} onPress={() => smileShow()}>
          <FontAwesome5 name="smile" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.icon, { backgroundColor: "orange" }]} onPress={() => mehShow()}>
          <FontAwesome5 name="meh" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.icon, { backgroundColor: "red" }]} onPress={() => sadShow()}>
          <Entypo name="emoji-sad" size={50} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {smileIcon ? (<SmileContent />) : null}
        {mehIcon ? (<MehContent />) : null}
        {sadIcon ? (<SadContent />) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "10%",
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
  contentContainer: {
    paddingHorizontal: "5%",
  }
});