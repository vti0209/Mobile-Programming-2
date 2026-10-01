import React from 'react';
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

// interface Props {
//   name: string;
//   age: number;
// }
type Props = {
  name: string;
  age: number;
};
const Baitap2 = (props: Props) => {
  const handlePress = () => { 
    // arrow function để xử lý sự kiện khi người dùng nhấn vào nút.hay còn gọi là hàm mũi tên. Nó được sử dụng để định nghĩa các hàm trong JavaScript và TypeScript. Cú pháp này giúp giữ ngữ cảnh (context) của từ khóa this trong hàm, đặc biệt hữu ích khi làm việc với các thành phần React.
    Alert.alert('Hello', `Xin chào ${props.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Mình là {props.name}, {props.age} tuổi!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Baitap2;