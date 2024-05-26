// HistoryScreen.tsx
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TransactionsContext } from "./TransactionsContext";
import { RootStackParamList } from "./types";

export const screenName = "History";

type HistoryScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "History"
>;

export default function HistoryScreen() {
  const navigation = useNavigation<HistoryScreenNavigationProp>();
  const transactionsContext = useContext(TransactionsContext);

  if (!transactionsContext) {
    throw new Error("TransactionsContext is not provided");
  }

  const { transactions } = transactionsContext;
  const [selectedPeriod, setSelectedPeriod] = useState<
    "day" | "week" | "month" | "year"
  >("day");

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.containerHistory}>
      <TouchableOpacity onPress={handleClose}>
        <Text style={styles.closeButton}>Закрыть</Text>
      </TouchableOpacity>
      <Text style={styles.title}>История</Text>
      <View style={styles.periodSelector}>
        <TouchableOpacity
          onPress={() => setSelectedPeriod("day")}
          style={[
            styles.periodButton,
            selectedPeriod === "day" && styles.selectedButton,
          ]}
        >
          <Text
            style={[
              styles.periodButtonText,
              selectedPeriod === "day" && styles.selectedButtonText,
            ]}
          >
            День
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedPeriod("week")}
          style={[
            styles.periodButton,
            selectedPeriod === "week" && styles.selectedButton,
          ]}
        >
          <Text
            style={[
              styles.periodButtonText,
              selectedPeriod === "week" && styles.selectedButtonText,
            ]}
          >
            Неделя
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedPeriod("month")}
          style={[
            styles.periodButton,
            selectedPeriod === "month" && styles.selectedButton,
          ]}
        >
          <Text
            style={[
              styles.periodButtonText,
              selectedPeriod === "month" && styles.selectedButtonText,
            ]}
          >
            Месяц
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedPeriod("year")}
          style={[
            styles.periodButton,
            selectedPeriod === "year" && styles.selectedButton,
          ]}
        >
          <Text
            style={[
              styles.periodButtonText,
              selectedPeriod === "year" && styles.selectedButtonText,
            ]}
          >
            Год
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.historyContainer}>
        {transactions.length === 0 ? (
          <Text style={styles.emptyText}>Пусто</Text>
        ) : (
          transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transaction}>
              <Text style={styles.transactionText}>
                {transaction.type === "income" ? "Доход" : "Расход"}:{" "}
                {transaction.amount} - {transaction.date}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHistory: {
    flex: 1,
    backgroundColor: "#F2F2F6",
  },
  closeButton: {
    color: "#007AFF",
    fontSize: 17,
    margin: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 10,
  },
  periodSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#E5E5EA",
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 5,
  },
  periodButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: "#FFFFFF",
  },
  periodButtonText: {
    color: "#8E8E93",
    fontSize: 16,
  },
  selectedButtonText: {
    color: "#000000",
  },
  historyContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  emptyText: {
    color: "#8E8E93",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
  },
  transaction: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionText: {
    fontSize: 16,
  },
});
