import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
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
    fontSize: 18,
  },

  button: {
    backgroundColor: '#8b0000',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  result: {
    fontSize: 20,
    marginTop: 25,
    color: 'red',
  },
});

const Baitap4 = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const handleSolve = () => {
    const numberA = Number(a);
    const numberB = Number(b);

    if (numberA === 0 && numberB === 0) {
      setResult('Phương trình có vô số nghiệm');
    } else if (numberA === 0 && numberB !== 0) {
      setResult('Phương trình vô nghiệm');
    } else {
      const x = -numberB / numberA;
      setResult(`Nghiệm x = ${x}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình ax + b = 0</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSolve}>
        <Text style={styles.buttonText}>Giải</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

export default Baitap4;