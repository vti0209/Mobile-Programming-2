import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

type Props = {
  name: string;
  age: number;
  setName: (name: string) => void;
  setAge: (age: number) => void;
};

const Baitap6 = (props: Props) => {
  const [newName, setNewName] = React.useState('');
  const [newAge, setNewAge] = React.useState('');

  const capNhat = () => {
    props.setName(newName);
    props.setAge(Number(newAge));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Component Con</Text>

      <Text>Tên từ cha: {props.name}</Text>
      <Text>Tuổi từ cha: {props.age}</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên mới"
        onChangeText={setNewName}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập tuổi mới"
        keyboardType="numeric"
        onChangeText={setNewAge}
      />

      <TouchableOpacity style={styles.button} onPress={capNhat}>
        <Text style={styles.buttonText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Baitap6;