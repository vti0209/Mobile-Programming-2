import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useRef } from 'react';
import ChildComponent from './ChildComponent';

const Giaiptb1 = () => {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [aSubmited, setASubmited] = useState('')
    const [bSubmited, setBSubmited] = useState('')
    const [result, setResult] = useState('')
    const [dem,setDem] = useState(0)
    const inputRef = useRef<TextInput>(null);
    const onGiai = () => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        if (isNaN(numA) || isNaN(numB)) {
            Alert.alert('Vui lòng nhập số hợp lệ cho hệ số A và B.');
            return;
        }
        if (numA === 0) {
            if (numB === 0) {
                setResult('Phương trình có vô số nghiệm.');
            } else {
                setResult('Phương trình vô nghiệm.');
            }
        } else {
            const x = -numB / numA;
            setResult(`Nghiệm của phương trình là:\n x = ${x.toFixed(2)}`);
        }

    };

    //bắt sự kiện nhấn nút "Truyền con" để truyền dữ liệu a và b xuống component con
    const handleProcess = () => {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        if (isNaN(numA) || isNaN(numB)) {
            Alert.alert('Vui lòng nhập số hợp lệ cho hệ số A và B.');
            return;
        }
        setASubmited(a);
        setBSubmited(b);  
        setDem(dem + 1); // tăng giá trị dem lên 1      
    }

    // hàm nhận dữ liệu từ component con: đây là bước 1
    const handleReceiveData = (newA: string, newB: string) => {
        setA(newA);
        setB(newB);
    };

    const onClear = () => {
        setA('');
        setB('');
        setResult('');
        inputRef.current?.focus();
    }
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}></Text>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Parent</Text>
            <TextInput style={styles.input}
                ref={inputRef}
                placeholder="Nhập hệ số A"
                keyboardType="numeric"
                value={a}
                onChangeText={setA}
               
            />
            <TextInput style={styles.input}
                placeholder="Nhập hệ số B"
                keyboardType="numeric"
                value={b}
                onChangeText={setB}
               
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity style={styles.button} onPress={onGiai} >
                    <Text style={styles.buttonText}>Giải pt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onClear} >
                    <Text style={styles.buttonText}>Xóa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { width: '50%' }]} onPress={handleProcess} >
                    <Text style={styles.buttonText}>Truyền con</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.resultContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>{result}</Text>
            </View>

            <ChildComponent aProp={aSubmited} bProp={bSubmited} demProp={dem} handleReceiveData={handleReceiveData} />
        </View>
    )
}

export default Giaiptb1

const styles = StyleSheet.create({
    input: {
        padding: 10,
        margin: 2,
        borderRadius: 5,
        backgroundColor: '#f3c5c5da',
        color: '#0e0d0d',
        fontSize: 28,
    },
    button: {
        backgroundColor: '#00daf2',
        width: '20%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
    resultContainer: {
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})