import React, {useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import ConComponent from '../đóng/conComponent';

const ChaComponent = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const [showCon, setShowCon] = useState(false);

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
      setResult(x.toFixed(2));
    }
  };

  // Truyền dữ liệu từ Cha xuống Con
  const truyenCon = () => {
    setShowCon(true);
  };

  // Nhận dữ liệu từ Con
  const nhanTuCon = (newA: string, newB: string) => {
    setA(newA);
    setB(newB);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Parent</Text>

      <TextInput
        style={styles.input}
        ref={inputARef}
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

        <TouchableOpacity style={styles.button} onPress={truyenCon}>
          <Text style={styles.buttonText}>Truyền con</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.result}>
        Kết quả: {result}
      </Text>

      <Text style={styles.nhan}>
        {showCon ? 'Đã truyền cho con' : ''}
      </Text>

      {showCon && (
        <ConComponent
          a={a}
          b={b}
          nhanTuCon={nhanTuCon}
        />
      )}

    </View>
  );
};

export default ChaComponent;

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
    width: '100%',
    gap: 10,
  },

  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },

  nhan: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});