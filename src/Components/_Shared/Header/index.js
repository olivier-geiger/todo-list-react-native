import React from "react";
import { View, Text, StyleSheet } from "react-native";

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
];
const months = [
  "Janv",
  "Fev",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
];

export default function Header() {
  const date = new Date();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {days[date.getDay()]} 
          <Text style={styles.day}>
          ,{date.getDate() + '' +
          months[date.getMonth()]}
          </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20, 
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff'
  },
  day: {
    fontSize: 20,
    fontWeight: 'lighter',
    color: '#fff'
  }
});
