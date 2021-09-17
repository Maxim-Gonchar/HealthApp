import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { textColor } from "../THEMES"
import { borderColor } from "../THEMES"
import { useNavigation } from '@react-navigation/native';


export const List = ({ list, remove }) => {
  const [checkboxState, setCheckboxState] = useState(false);
  const navigation = useNavigation();
  const data = list;

  return (
    <FlatList
      data={list}
      keyExtractor={item => item.key.toString()}
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity style={styles.list} onPress={() => navigation.navigate("Medication details", { name: item.name, time: item.time })} onLongPress={() => remove(item.key)}>
            <View>
              <Text style={styles.listText}>{item.time}</Text>
            </View>
            <View>
              <Text style={styles.listText}>{item.name}</Text>
            </View>
            <View>
              <BouncyCheckbox
                iconStyle={{ borderColor: borderColor }}
                fillColor="blue"
                size={32}
                isChecked={checkboxState}
                onPress={() => setCheckboxState(!checkboxState)}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    height: 50,
    borderRadius: 15,
    marginBottom: "3%",
    borderColor: borderColor,
    paddingLeft: 10,
  },
  listText: {
    fontSize: 22,
    color: textColor,
  },
});