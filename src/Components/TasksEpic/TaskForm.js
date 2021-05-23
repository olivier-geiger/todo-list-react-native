import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const TaskFrom = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const _onChangeText = value => {
    setTitle(value);
  };

  const _onPressBtn = () => {
    if (title.length > 0) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} value={title} onChangeText={_onChangeText} />
      </View>
      <Button onPress={_onPressBtn} title="Ajouter" color="#EB06FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  containerInput: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#EB06FF",
    borderRadius: 4,
    paddingLeft: 7
  },
  input: {
    color: "#fff"
  }
});

export default TaskFrom;
