import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./types";

import { styles, colors } from "../styles/GlobalStyles";
import Main, { screenName as MainName } from "./MainScreen";
import { UserContext } from "./usercontext";

export const screenName = "Profile";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

export default function ProfilesScreen() {
  // const navigation = useNavigation();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { Login: username, SetLogin: setUsername } = useContext(UserContext);

  const handleBackToMain = () => {
    if (navigation) {
      navigation.navigate(MainName as never);
    }
  };
  const handleNotifications = () => {
    // if (navigation) {
    //     navigation.navigate(MainName as never);
    // }
  };
  const handleCategories = () => {
    // if (navigation) {
    //     navigation.navigate(MainName as never);
    // }
  };
  const handleArticle = () => {
    // if (navigation) {
    //     navigation.navigate(MainName as never);
    // }
  };
  const handleAddProfile = () => {
    // if (navigation) {
    //     navigation.navigate(MainName as never);
    // }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.profileScreenContainer}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <Text style={{ ...styles.textTitle, marginBottom: 20 }}>Профили</Text>
        <View style={styles.profileContainer}>
          <View style={styles.profileInfo}>
            <Image
              source={require("../assets/profile.png")}
              style={styles.profileImage}
            />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>{username}</Text>
              <Text style={styles.textLabel}>Баланс: 0 ₽</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.deleteButton}>
            <Ionicons name="trash-outline" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            ...styles.addAccountButton,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          onPress={handleAddProfile}
        >
          <TouchableOpacity
            style={{
              width: 42,
              height: 42,
              borderRadius: 28,
              backgroundColor: "#EAB308",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 24 }}>+</Text>
          </TouchableOpacity>
          <Text style={styles.addAccountButtonText}>Добавить аккаунт</Text>
        </TouchableOpacity>

        <Text style={{ ...styles.textUnderTitle, marginBottom: 10 }}>
          Настройки
        </Text>
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={{ ...styles.profileContainer, height: 40 }}>
            <Text style={styles.settingButtonText}>Уведомления</Text>
            <Ionicons name="chevron-forward" size={20} color="#EAB308" />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.profileContainer, height: 40 }}>
            <Text style={styles.settingButtonText}>Категории</Text>
            <Ionicons name="chevron-forward" size={20} color="#EAB308" />
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.profileContainer, height: 40 }}>
            <Text style={styles.settingButtonText}>Образование</Text>
            <Ionicons name="chevron-forward" size={20} color="#EAB308" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{ ...styles.backButton, marginHorizontal: 15 }}
        onPress={handleBackToMain}
      >
        <Text style={styles.backButtonText}>Вернуться</Text>
      </TouchableOpacity>
    </View>
  );
}
