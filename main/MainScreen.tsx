import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width } = Dimensions.get("window");
const chartWidth = width * 0.9;
const chartHeight = 200;

import { styles, colors } from '../styles/GlobalStyles';

export const screenName = 'Main';

export default function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [selectedDay, setSelectedDay] = useState(6);
  const [weekData, setWeekData] = useState([
    { income: 0, expense: 0 },
    { income: 0, expense: 0 },
    { income: 0, expense: 0 },
    { income: 0, expense: 0 },
    { income: 0, expense: 0 },
    { income: 0, expense: 0 },
    { income: 0, expense: 0 },
  ]);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyExpense, setMonthlyExpense] = useState(0);
  const [budget, setBudget] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [balance, setBalance] = useState(0);
  const [budgetModalVisible, setBudgetModalVisible] = useState(false);
  const [goalModalVisible, setGoalModalVisible] = useState(false);
  const [budgetInput, setBudgetInput] = useState("");
  const [goalInput, setGoalInput] = useState("");

  const openModal = (day: React.SetStateAction<number>) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setAmount("");
  };

  const addAmount = () => {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      const updatedWeekData = [...weekData];
      if (parsedAmount >= 0) {
        updatedWeekData[selectedDay].income = parsedAmount;
        setMonthlyIncome(monthlyIncome + parsedAmount);
        setBalance(balance + parsedAmount);
      } else {
        updatedWeekData[selectedDay].expense = Math.abs(parsedAmount);
        setMonthlyExpense(monthlyExpense + Math.abs(parsedAmount));
        setBalance(balance - Math.abs(parsedAmount));
      }
      setWeekData(updatedWeekData);
      closeModal();
    }
  };

  const getMaxAmount = () => {
    const maxIncome = Math.max(...weekData.map((day) => day.income));
    const maxExpense = Math.max(...weekData.map((day) => day.expense));
    return Math.max(maxIncome, maxExpense);
  };

  const renderBar = (amount: number, maxAmount: number, color: string) => {
    const percentage = (amount / maxAmount) * 100;
    return (
      <View
        style={{
          width: "50%",
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        <View
          style={{
            width: 10,
            height: `${percentage}%`,
            backgroundColor: color,
            borderRadius: 5,
          }}
        />
      </View>
    );
  };

  const maxAmount = getMaxAmount();

  const updateBudget = () => {
    const parsedBudget = parseFloat(budgetInput);
    if (!isNaN(parsedBudget)) {
      setBudget(parsedBudget);
      setBudgetModalVisible(false);
      setBudgetInput("");
    }
  };

  const updateSavingsGoal = () => {
    const parsedGoal = parseFloat(goalInput);
    if (!isNaN(parsedGoal)) {
      setSavingsGoal(parsedGoal);
      setGoalModalVisible(false);
      setGoalInput("");
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}>
      Вот тут!!!!!!
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#333",
          }}
        >
          Финансы
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20,
            backgroundColor: "#FFF",
            borderRadius: 10,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, marginBottom: 5, color: "#333" }}>
              {monthlyIncome} ₽
            </Text>
            <Text style={{ color: "#777" }}>Доход за месяц</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, marginBottom: 5, color: "#333" }}>
              {monthlyExpense} ₽
            </Text>
            <Text style={{ color: "#777" }}>Расход за месяц</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "#FFF",
            borderRadius: 10,
            padding: 15,
            marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {weekData.map((day, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openModal(index)}
                style={{
                  alignItems: "center",
                  width: "14.28%",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    height: "100%",
                    flexDirection: "row",
                    alignItems: "flex-end",
                  }}
                >
                  {renderBar(day.income, maxAmount, "#EAB308")}
                  {renderBar(day.expense, maxAmount, "#D4D4D8")}
                </View>
                <Text style={{ fontSize: 12, color: "#777", marginTop: 5 }}>
                  {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][index]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              padding: 15,
              borderRadius: 10,
              flex: 1,
              marginRight: 10,
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 16, textAlign: "center" }}>
              Анализ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              padding: 15,
              borderRadius: 10,
              flex: 1,
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 16, textAlign: "center" }}>
              История
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 20,
            backgroundColor: "#FFF",
            borderRadius: 10,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              color: "#333",
            }}
          >
            Бюджет
          </Text>
          {budget > 0 ? (
            <Text style={{ color: "#777", marginBottom: 10 }}>
              Ваш план по расходам: {budget} ₽
            </Text>
          ) : null}
          <TouchableOpacity
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#EAB308",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
            onPress={() => setBudgetModalVisible(true)}
          >
            <Text style={{ color: "#FFF", fontSize: 24 }}>+</Text>
          </TouchableOpacity>
          <Text style={{ color: "#777", marginTop: 10, textAlign: "center" }}>
            Добавить цель
          </Text>
        </View>
        <View
          style={{
            marginBottom: 20,
            backgroundColor: "#FFF",
            borderRadius: 10,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              color: "#333",
            }}
          >
            Денежная цель
          </Text>
          {savingsGoal > 0 ? (
            <Text style={{ color: "#777", marginBottom: 10 }}>
              Накопите или отложите: {savingsGoal} ₽
            </Text>
          ) : null}
          <TouchableOpacity
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#EAB308",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
            onPress={() => setGoalModalVisible(true)}
          >
            <Text style={{ color: "#FFF", fontSize: 24 }}>+</Text>
          </TouchableOpacity>
          <Text style={{ color: "#777", marginTop: 10, textAlign: "center" }}>
            Добавить цель
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FFF",
            borderRadius: 10,
            padding: 20,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              color: "#333",
            }}
          >
            Текущий баланс
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 10,
            }}
          >
            {balance} ₽
          </Text>
          <TouchableOpacity
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#EAB308",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => openModal(selectedDay)}
          >
            <Text style={{ color: "#FFF", fontSize: 24 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              padding: 20,
              width: "80%",
            }}
          >
            <Text
              style={{ fontSize: 18, marginBottom: 10, textAlign: "center" }}
            >
              Введите сумму для{" "}
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][selectedDay]}:
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "#CCC",
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginBottom: 20,
              }}
              keyboardType="numeric"
              placeholder="Сумма"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#EAB308",
                  padding: 15,
                  borderRadius: 10,
                }}
                onPress={addAmount}
              >
                <Text style={{ color: "#FFF", fontSize: 16 }}>Добавить</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#E0E0E0",
                  padding: 15,
                  borderRadius: 10,
                }}
                onPress={closeModal}
              >
                <Text style={{ color: "#333", fontSize: 16 }}>Отмена</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={budgetModalVisible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              padding: 20,
              width: "80%",
            }}
          >
            <Text
              style={{ fontSize: 18, marginBottom: 10, textAlign: "center" }}
            >
              Введите бюджет:
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "#CCC",
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginBottom: 20,
              }}
              keyboardType="numeric"
              placeholder="Бюджет"
              value={budgetInput}
              onChangeText={(text) => setBudgetInput(text)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#EAB308",
                padding: 15,
                borderRadius: 10,
                alignSelf: "center",
              }}
              onPress={updateBudget}
            >
              <Text style={{ color: "#FFF", fontSize: 16 }}>Сохранить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={goalModalVisible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              padding: 20,
              width: "80%",
            }}
          >
            <Text
              style={{ fontSize: 18, marginBottom: 10, textAlign: "center" }}
            >
              Введите денежную цель:
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "#CCC",
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginBottom: 20,
              }}
              keyboardType="numeric"
              placeholder="Денежная цель"
              value={goalInput}
              onChangeText={(text) => setGoalInput(text)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#EAB308",
                padding: 15,
                borderRadius: 10,
                alignSelf: "center",
              }}
              onPress={updateSavingsGoal}
            >
              <Text style={{ color: "#FFF", fontSize: 16 }}>Сохранить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
