// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, ScrollView } from 'react-native'; // SafeAreaView는 디바이스 크기를 인식해서 padding 적용하는 듯...?
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello There</Text>
      <View style={styles.card}>
        <TodoInsert />
        <TodoList />
      </View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: 'white',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  }
});
