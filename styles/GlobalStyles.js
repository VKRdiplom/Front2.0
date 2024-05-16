import { StyleSheet } from "react-native";

export const colors = {
  gray50: '#FAFAFA',
  gray200: '#E4E4E7',
  gray800: '#27272A',
  text500: '#737373',
  text900: '#171717',
  muted900: '#171717',
  dark600: '#D4D4D8',
  yellow500: '#EAB308',
};

export const styles = StyleSheet.create({
    textLabel: {
      textAlign: 'left',
      fontSize: 12,
      fontFamily: 'SF-Regular',
    },
    textTitle: {
      fontSize: 36,
      fontFamily: 'SF-Bold',
    },
    imageProfile: {
      resizeMode: 'contain',
      width: 52,
      height: 52,
    },
    shadow2: {
      shadowColor: '000000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    rectangle: {
      backgroundColor: 'FAFAFA',
      borderRadius: 10,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
});


export const darkTheme = StyleSheet.create({


});

export const lightTheme = StyleSheet.create({


});