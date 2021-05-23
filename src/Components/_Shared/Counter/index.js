import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Counter = ({ nb, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor : "#3450a1",
    padding: 15,
    borderRadius:20
  },
  nb: {
    fontWeight: "bold", 
    color: "#EB06FF",
    paddingBottom: 5
  },
  title: {
    color: "#041955"
  }
});

export default Counter;
