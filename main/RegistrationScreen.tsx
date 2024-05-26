import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { styles, colors } from "../styles/GlobalStyles";
import LoginScreen, { screenName as LoginName } from "./LoginScreen";

export const screenName = "Registration";

export default function RegistrationScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const register = () => {
    if (!username) {
      setErrorMessage("Введите имя пользователя.");
      return;
    }
    if (!password) {
      setErrorMessage("Введите пароль.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Пароли не совпадают.");
      return;
    }
    setErrorMessage("");
    console.log("Регистрация успешна");
    // Здесь можно добавить логику регистрации, например, отправку данных на сервер
  };

  const handleLogin = () => {
    if (navigation) {
      navigation.navigate(LoginName as never);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.containerReg}>
        <Text style={{ ...styles.titleReg }}>Создайте аккаунт</Text>
        <TextInput
          style={styles.inputReg}
          placeholder="Имя"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="gray500"
        />
        <TextInput
          style={styles.inputReg}
          placeholder="Придумайте пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholderTextColor="gray500"
        />
        <TextInput
          style={styles.inputReg}
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          placeholderTextColor="gray500"
        />
        {errorMessage ? (
          <Text style={styles.errorTextReg}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity style={styles.buttonReg} onPress={register}>
          <Text style={styles.backButtonText}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text
            style={{ fontFamily: "SF-Regular", fontSize: 16, color: "#000" }}
          >
            Уже есть аккаунт?{" "}
            <Text style={styles.registrationLink}>Войдите в него!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
