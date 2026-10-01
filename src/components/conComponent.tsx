import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  a: string;
  b: string;
  nhanTuCon: (a: string, b: string) => void;
};

const ConComponent = (props: Props) => {
  const [a, setA] = useState(props.a);
  const [b, setB] = useState(props.b);
  const [result, setResult] = useState('');

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
      setResult(x.toFixed(2));
    }
  };

  const handleClear = () => {
    setA('');
    setB('');
    setResult('');
  };

  // Truyền dữ liệu ngược lên Cha
  const truyenCha = () => {
    props.nhanTuCon(a, b);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Child</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số A"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số B"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <View style={styles.NutCuoi}>

        <TouchableOpacity style={styles.button} onPress={xuLy}>
          <Text style={styles.buttonText}>Giải pt</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'red'}]}
          onPress={handleClear}>
          <Text style={styles.buttonText}>Xóa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={truyenCha}>
          <Text style={styles.buttonText}>Truyền cha</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.result}>
        Kết quả: {result}
      </Text>

    </View>
  );
};

export default ConComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
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
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  NutCuoi: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },

  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});