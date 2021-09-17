import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';


export const Calendar = () => {
  return (
    <View>
      <CalendarStrip
        style={{ height: 80, paddingTop: 10, paddingBottom: 5 }}
        calendarColor={'#3343CE'}
        calendarHeaderStyle={{ color: 'white' }}
        dateNumberStyle={{ color: 'white' }}
        dateNameStyle={{ color: 'white' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});