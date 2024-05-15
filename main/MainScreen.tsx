import React, { useEffect, useState, } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, Image, Pressable, DimensionValue, Modal, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import { styles, colors } from '../styles/GlobalStyles';

export const screenName = 'Main';

const { width } = Dimensions.get('window');
const chartWidth = width * 0.9;
const chartHeight = 200;

export default function Main() {

  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [selectedDay, setSelectedDay] = useState(6);
  const [weekData, setWeekData] = useState([
    { income: 100, expense: 50 },
    { income: 200, expense: 100 },
    { income: 150, expense: 75 },
    { income: 300, expense: 200 },
    { income: 250, expense: 150 },
    { income: 400, expense: 300 },
    { income: 0, expense: 0 },
  ]);

  const openModal = (day: React.SetStateAction<number>) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setAmount('');
  };

  const addAmount = () => {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      const updatedWeekData = [...weekData];
      if (parsedAmount >= 0) {
        updatedWeekData[selectedDay].income = parsedAmount;
      } else {
        updatedWeekData[selectedDay].expense = Math.abs(parsedAmount);
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

  const renderBar = (amount: number, maxAmount: number) => {
    const percentage = (amount / maxAmount) * 100;
    return (
      <View style={{ height: '100%', width: 20, backgroundColor: '#e0e0e0', justifyContent: 'flex-end' }}>
        <View style={{ height: `${percentage}%`, width: '100%', backgroundColor: amount >= 0 ? 'green' : 'red' }} />
      </View>
    );
  };

  const maxAmount = getMaxAmount();



  
  const navigation = useNavigation();

  const handleProfile = () => {
    // if (navigation) {
    //   navigation.navigate(LoginName as never);
    // }
  };

  const [SIZE, USESIZE] = useState(['10%', '5%', '15%', '40%', '50%', '60%', '50%']);
  const formula = (item: any) => { return (parseInt(item) + Math.floor(Math.random() * 15)) % 100 }
  // const test = () => {
  //   USESIZE(prevState => { return prevState.map((item) => { return formula(item) + '%' }) })
  // }


  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: chartWidth, height: chartHeight, flexDirection: 'row', justifyContent: 'space-around' }}>
          {weekData.map((day, index) => (
            <TouchableOpacity key={index} onPress={() => openModal(index)} style={{ alignItems: 'center' }}>
              <View style={{ height: '100%', justifyContent: 'flex-end' }}>
                {renderBar(day.income, maxAmount)}
                {renderBar(-day.expense, maxAmount)}
              </View>
              <Text style={{ fontSize: 12 }}>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Modal visible={modalVisible} animationType="slide">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Enter Amount for {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][selectedDay]}:</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
              keyboardType="numeric"
              placeholder="Amount"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
            <Button title="Add" onPress={addAmount} />
            <Button title="Cancel" onPress={closeModal} />
          </View>
        </Modal>
      </View>
      {/* <View style={{ ...styles.container, width: 360, height: 52, marginTop: 20, marginLeft: 15, marginRight: 15 }}>
        <View style={{ ...styles.container, width: 162, height: 52, flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text style={{ ...styles.textLabel }}>Владислав</Text>
          <Text style={styles.textTitle}>Финансы</Text>
        </View>
        <View>
          <Pressable onPress={handleProfile}>
            <Image
              source={require('../assets/mainscreenprofile.png')}
              style={{ ...styles.imageProfile, marginLeft: 146 }}
            />
          </Pressable>
        </View>
      </View>
      <View style={{ ...styles.container, width: 360, height: 209, backgroundColor: 'pink', marginTop: 30, marginLeft: 15, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <View style={{ ...styles.container, width: 360, height: 69, backgroundColor: 'green', justifyContent: 'flex-start' }}>
          <View style={{ ...styles.rectangle, width: 170, height: 69 }}>

          </View>
        </View>
        <View key='rectangle4'>
          <View
            key='rectangle53'
            style={{ height: 80, width: '80%', backgroundColor: 'gray', marginTop: 50, flexDirection: 'row', transform: [{ rotateX: '180deg' }], justifyContent: 'space-between', alignSelf: 'center', paddingHorizontal: '10%' }}>
            {
              SIZE.map((item) => {
                return <View
                  key='bar'
                  style={{ width: 10, backgroundColor: 'orange', height: item as DimensionValue, minHeight: 1 }} />
              })
            }
          </View>
        </View>
      </View> */}
    </View>
  )
};