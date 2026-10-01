import { Text,StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRef } from 'react'

const Baitap5 = () => {
  const [a, setA] = React.useState('');
  const [b, setB] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputARef = useRef<TextInput>(null);
  const handleClear = () => {
    setA('');
    setB('');
    setResult('');
    inputARef.current?.focus(); 
  };
  const xuLy = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult('Vui lòng nhập số hợp lệ cho a và b');
      return;
    }
    if (numA === 0) {
      if (numB === 0) {
        setResult('Phương trình có vô số nghiệm');
      } else {
        setResult('Phương trình vô nghiệm');
      }
    } else {
      const x = -numB / numA;
      setResult(x.toFixed(2)); // làm tròn 2 chữ số: dùng toFixed(2)
    }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc nhất ax+b=0</Text>
      <TextInput style={styles.input}
        ref={inputARef}
        placeholder="Nhập số a: "
        keyboardType="numeric"
        value={a}
          onChangeText={setA}
        />

        <TextInput style={styles.input}
          placeholder="Nhập số b: "
          keyboardType="numeric"
          value={b}
          onChangeText={setB}
        />
        <View style={styles.NutCuoi}>
                <TouchableOpacity style={styles.button} onPress={xuLy}>
                    <Text style={styles.buttonText}>Giải pt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]} onPress={handleClear}>
                    <Text style={styles.buttonText}>Xóa</Text>
                </TouchableOpacity>
          </View>
        <Text style={styles.result}> Kết quả của phương trình {'\n'} là: {result} </Text> 
    </View>
  )
}

export default Baitap5

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

  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
  },
  NutCuoi: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },
});