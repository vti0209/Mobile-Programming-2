import React, { useRef, useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

import TenCon from './TenCon';

const TenCha = () => {
  const [tenCha, setTenCha] = useState('');
  const [tuoiCha, setTuoiCha] = useState('');

  const [tenChaSubmitted, setTenChaSubmitted] = useState('');
  const [tuoiChaSubmitted, setTuoiChaSubmitted] = useState('');

  const [dem, setDem] = useState(0);

  const inputRef = useRef<TextInput>(null);

  const handleProcess = () => {
    setTenChaSubmitted(tenCha);
    setTuoiChaSubmitted(tuoiCha);
    setDem(prev => prev + 1);
  };

  const handleReceiveData = (
    newTen: string,
    newTuoi: string,
  ) => {
    setTenCha(newTen);
    setTuoiCha(newTuoi);
  };

  const onClear = () => {
    setTenCha('');
    setTuoiCha('');
    inputRef.current?.focus();
  };
  const handleAlertCha = () => {
    alert(`Tên cha là ${tenCha}, và đã ${tuoiCha} tuổi`);
  }

  return (
    <View>
      <Text style={styles.title}>Thông tin cha</Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Nhập tên cha"
        value={tenCha}
        onChangeText={setTenCha}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi cha"
        keyboardType="numeric"
        value={tuoiCha}
        onChangeText={setTuoiCha}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onClear}>
          <Text style={styles.buttonText}>Xóa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { width: '30%' }, { backgroundColor: 'green' }]}
          onPress={handleProcess}>
          <Text style={styles.buttonText}>
            Gửi Con
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.button, { width: '20%' }, { backgroundColor: 'blue' }]}
            onPress={handleAlertCha}>
            <Text style={styles.buttonText}>PopUp</Text>
        </TouchableOpacity>
        
      </View>

      <TenCon
        aProp={tenChaSubmitted}
        bProp={tuoiChaSubmitted}
        demProp={dem}
        handleReceiveData={handleReceiveData}
      />
    </View>
  );
};

export default TenCha;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#907b6f',
  },

  input: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#ccc5c5da',
    fontSize: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  button: {
    backgroundColor: '#2baed6',
    height: 50,
    width: '20%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});