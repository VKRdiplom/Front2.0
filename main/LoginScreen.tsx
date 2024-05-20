import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { styles, colors } from '../styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

import RegistrationScreen, { screenName as RegistrationName } from './RegistrationScreen';
import ForgotPasswordScreen, { screenName as ForgotPasswordName } from './ForgotPasswordScreen';

export const screenName = 'Login';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();

    const login = () => {
        if (!username) {
            setErrorMessage('Введите имя пользователя.');
            return;
        }
        if (!password) {
            setErrorMessage('Введите пароль.');
            return;
        }
        setErrorMessage('');
        console.log('Вход успешен');
        // Здесь можно добавить логику входа, например, проверку данных на сервере
    };

    const handleMain = () => {
        // if (navigation) {
        //     navigation.navigate(MainName as never);
        // }
    };
    const handleRegistration = () => {
        if (navigation) {
            navigation.navigate( RegistrationName as never);
        }
    };
    const handleForgotPassword = () => {
        if (navigation) {
            navigation.navigate( ForgotPasswordName as never);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.containerReg}>
                <Text style={styles.titleReg}>Уже есть аккаунт?</Text>
                <TextInput
                    style={styles.inputReg}
                    placeholder="Имя"
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor="gray500"
                />
                <TextInput
                    style={styles.inputReg}
                    placeholder="Введите пароль"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholderTextColor="gray500"
                />
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.errorTextReg}>Забыли пароль?</Text>
                </TouchableOpacity>
                {errorMessage ? <Text style={styles.errorTextReg}>{errorMessage}</Text> : null}
                <TouchableOpacity style={styles.buttonReg} onPress={login}>
                    <Text style={styles.backButtonText}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRegistration}>
                    <Text style={{ fontFamily: 'SF-Regular', fontSize: 16, color: '#000' }}>
                        Еще нет аккаунта? <Text style={styles.registrationLink}>Создайте его!</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};