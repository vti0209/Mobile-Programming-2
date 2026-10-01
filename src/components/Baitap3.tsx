import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'red',
    fontSize: 20,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#8b0000',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Baitap3 = () => {
  // name và age là state
  const [name] = useState('Hồ Văn Tiết');
  const [age] = useState(20);

  const handlePress = () => {
    Alert.alert(
      'Hello',
      `Xin chào ${name}, bạn ${age} tuổi!`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello {name}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}>
        <Text style={styles.buttonText}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Baitap3;