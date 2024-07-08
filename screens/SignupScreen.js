import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignupScreen = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignUp = () => {
        // Implement signup logic here (e.g., send data to backend)
        console.log('Signing up with:', email, password);
        // You can add more validation and API calls here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstname}
                onChangeText={setFirstName}
                keyboardType="first-name"
                autoCapitalize="none"
            />
             <TextInput
                style={styles.input}
                placeholder="last Name"
                value={lastname}
                onChangeText={setLastName}
                keyboardType="last-name"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={firstname}
                onChangeText={setFirstName}
                keyboardType="email-address"
                autoCapitalize="none"
            />
             <TextInput
                style={styles.input}
                placeholder="Contact"
                value={phone}
                onChangeText={setPhone}
                keyboardType="Contact"
                autoCapitalize="none"
            />
             <TextInput
                style={styles.input}
                placeholder="Gender"
                value={gender}
                onChangeText={setGender}
                keyboardType="Gender"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                title="Sign Up"
                onPress={handleSignUp}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default SignupScreen;
