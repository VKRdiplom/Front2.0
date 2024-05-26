import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles, colors } from "../styles/GlobalStyles";
import LoginScreen, { screenName as LoginName } from "./LoginScreen";

export const screenName = "ForgotPassword";

export default function ForgotPasswordScreen() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  const resetPassword = () => {
    if (!newPassword) {
      setErrorMessage("Введите новый пароль.");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Пароли не совпадают.");
      return;
    }
    setErrorMessage("");
    console.log("Пароль успешно изменен");
    // Здесь можно добавить логику смены пароля, например, отправку данных на сервер
  };

  const handleLogin = () => {
    if (navigation) {
      navigation.navigate(LoginName as never);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.containerReg}>
        <Text style={styles.titleReg}>Восстановление пароля</Text>
        <TextInput
          style={styles.inputReg}
          placeholder="Задайте новый пароль"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
          placeholderTextColor="gray500"
        />
        <TextInput
          style={styles.inputReg}
          placeholder="Повторите новый пароль"
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
          secureTextEntry={true}
          placeholderTextColor="gray500"
        />
        {errorMessage ? (
          <Text style={styles.errorTextReg}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity style={styles.buttonReg} onPress={resetPassword}>
          <Text style={styles.backButtonText}>Сменить пароль</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text
            style={{ fontFamily: "SF-Regular", fontSize: 16, color: "#000" }}
          >
            Вспомнили пароль?{" "}
            <Text style={styles.registrationLink}>Войдите!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
