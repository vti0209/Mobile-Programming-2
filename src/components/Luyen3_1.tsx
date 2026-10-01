import { Text, StyleSheet, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'

const Baitap31 = () => {
  const [a, setA] = React.useState('');
  const [b, setB] = React.useState('');
  const xuLy = () => {
    Alert.alert(`Xin chào ${a}, bạn ${b} tuổi!`);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập tên tuổi và popup ra</Text>
      <TextInput style={styles.input}
        placeholder="Nhập tên: "
        onChangeText={setA}
        />

        <TextInput style={styles.input}
          placeholder="Nhập tuổi: "
          onChangeText={setB}
        />

        <TouchableOpacity style={styles.button} onPress={xuLy}>
            <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Baitap31

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});