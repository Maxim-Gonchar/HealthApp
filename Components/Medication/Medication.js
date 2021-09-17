import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import { List } from './List';
import { AntDesign } from '@expo/vector-icons';
import { textColor } from "../THEMES"
import { borderColor } from "../THEMES"
import { useNavigation } from '@react-navigation/native';
import CalendarStrip from 'react-native-calendar-strip';


export const Medication = ({ navigation }) => {
  const navigator = useNavigation();

  const [medicationList, setMedicationList] = useState([
    { name: "Analgin", key: "1", time: "12:00" },
    { name: "Aspirin", key: "2", time: "15:00" },
    { name: "Ketamin", key: "3", time: "18:00" },
  ])
  const [textValue, setTextValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [modal, setModal] = useState(false);
  const addMedication = (name, time) => {
    if (name.trim()) {
      setMedicationList((prev) => [...prev, {
        key: Date.now(),
        name: name,
        time: time
      }])
    }
    setTextValue("");
    setDateValue("");
    setModal(false);
  }
  const removeMedication = (key) => {
    setMedicationList(medicationList => medicationList.filter(med => med.key !== key))
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
        <CalendarStrip
          style={{ height: 80, paddingTop: 10, paddingBottom: 5 }}
          calendarColor={'#3343CE'}
          calendarHeaderStyle={{ color: 'white' }}
          dateNumberStyle={{ color: 'white' }}
          dateNameStyle={{ color: 'white' }}
        />
      </View>
      <View style={styles.container}>
        <Modal visible={modal} style={styles.container}>
        <View>
          <View style={[{ alignItems: "center", marginBottom: "5%" }]}>
            <Text style={{ fontSize: 18 }}>Введите название лекарства</Text>
          </View>
          <TextInput style={[styles.textInput, { textAlign: "center" }]} autoCorrect={false} onChangeText={text => setTextValue(text)} value={textValue} />
          <View style={[{ alignItems: "center", marginBottom: "5%" }]}>
            <Text style={{ fontSize: 20 }}>Выберете удобное для вас время</Text>
          </View>
          <TextInput style={[styles.textInput, { textAlign: "center" }]} onChangeText={text => setDateValue(text)} value={dateValue} autoCorrect={false} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => addMedication(textValue, dateValue)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Добавить</Text>
            </View>
          </TouchableOpacity >
          <TouchableOpacity onPress={() => setModal(false)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Отменить</Text>
            </View>
          </TouchableOpacity >
        </View>
      </Modal>
        <View>
          <View style={[{ flexDirection: "row", width: "100%", justifyContent: "space-between" }]}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Medication</Text>
            </View>
            <TouchableOpacity onPress={() => setModal(true)}>
              <AntDesign name="plussquare" size={36} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <List list={medicationList} remove={removeMedication} />
          </View>
        </View>
      </View >
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: "5%",
  },
  nameContainer: {
    justifyContent: "center",
    height: 40,
    marginBottom: "8%",
  },
  nameText: {
    fontSize: 24,
    color: textColor,
  },
  inputContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: "5%",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  textInput: {
    height: 40,
    borderColor: borderColor,
    borderWidth: 2,
    borderRadius: 20,
    width: "100%",
    padding: 10,
    color: "black",
    backgroundColor: textColor,
    marginBottom: "5%"
  },
  button: {
    height: 60,
    width: 100,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: borderColor,
    backgroundColor: "white"
  },
  buttonText: {
    fontSize: 18,
    color: borderColor,
  }
});
