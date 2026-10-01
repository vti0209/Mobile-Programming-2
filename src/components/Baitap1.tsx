import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 50,
  },
});

const Baitap1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Tiet</Text>
    </View>
  );
};

export default Baitap1;