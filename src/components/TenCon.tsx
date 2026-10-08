import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface TenConProps {
  aProp: string;
  bProp: string;
  demProp: number;
  handleReceiveData: (
    ten: string,
    tuoi: string,
  ) => void;
}

const TenCon: React.FC<TenConProps> = ({
  aProp,
  bProp,
  demProp,
  handleReceiveData,
}) => {
  const [tenCon, setTenCon] = useState('');
  const [tuoiCon, setTuoiCon] = useState('');

  const inputRef = useRef<TextInput>(null);


  useEffect(() => {
    setTenCon(aProp);
    setTuoiCon(bProp);
  }, [demProp, aProp, bProp]);

  const handleSendToParent = () => {
    handleReceiveData(tenCon, tuoiCon);
  };

  const onClear = () => {
    setTenCon('');
    setTuoiCon('');
    inputRef.current?.focus();
  };

  const handleAlertCon = () => {
    alert(`Tên con là ${tenCon}, và đã ${tuoiCon} tuổi`);
  }

  return (
    <View style={{ marginTop: 40 }}>
      <Text style={styles.title}>Thông tin con</Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Nhập tên con"
        value={tenCon}
        onChangeText={setTenCon}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi con"
        keyboardType="numeric"
        value={tuoiCon}
        onChangeText={setTuoiCon}
      />
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onClear}>
          <Text style={styles.buttonText}>Xóa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { width: '30%' }, { backgroundColor: 'green' }]}
          onPress={handleSendToParent}>
          <Text style={styles.buttonText}>
            Gửi Cha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.button, { width: '20%' }, { backgroundColor: 'red' }]}
            onPress={handleAlertCon}>
            <Text style={styles.buttonText}>PopUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TenCon;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5a524e',
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