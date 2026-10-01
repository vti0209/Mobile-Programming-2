// import Baitap1 from './src/components/Baitap1';
// import Baitap2 from './src/components/Baitap2';
// import Baitap3 from './src/components/Baitap3';
// import Baitap4 from './src/components/Baitap4';
// import Baitap31 from './src/components/Luyen3_1';
// import Baitap5 from "./src/components/Luyen4_1";

// const App = () => {
//   // return <Baitap2 name="Hồ Văn Tiết" age={20} />;
//   // return <Baitap1 />;
//   // return <Baitap3 />;
//   // return <Baitap4 />;
//   // return <Baitap31 />;
// //   return <Baitap5 />;
// };

// export default App;

import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Baitap6 from './src/components/Baitap6';

const App = () => {
  const [name, setName] = useState('Tiết');
  const [age, setAge] = useState(20);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Component Cha</Text>

      <Text>Tên: {name}</Text>
      <Text>Tuổi: {age}</Text>

      <Baitap6
        name={name}
        age={age}
        setName={setName}
        setAge={setAge}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default App;