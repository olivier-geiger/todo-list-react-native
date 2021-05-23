import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';

import Header from './src/Components/_Shared/Header'
import TasksContainer from './src/Components/TasksEpic/TasksContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TasksContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041955',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    color: '829fec',
    paddingLeft: 20,
    paddingRight: 20
  },
});
