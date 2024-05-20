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
    textUnderTitle: {
      fontSize: 16,
      fontFamily: 'SF-Bold',
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
    profileScreenContainer: {
      flex: 1,
      backgroundColor: '#E4E4E7',
      padding: 20,
    },
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      shadowColor: '000000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 2,
    },
    profileInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      width: 42,
      height: 42,
      marginRight: 15,
    },
    profileText: {
      justifyContent: 'center',
    },
    profileName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    profileBalance: {
      fontSize: 14,
      color: '#777',
    },
    deleteButton: {
      padding: 10,
    },
    deleteButtonText: {
      fontSize: 14,
      color: '#333',
    },
    addAccountButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 10,
      marginBottom: 40,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    addAccountButtonText: {
      fontSize: 16,
      color: '#737373',
    },
    settingsContainer: {
      marginBottom: 20,
    },
    settingButton: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    settingButtonText: {
      fontSize: 14,
      color: '#333',
    },
    backButton: {
      bottom: 20,
      backgroundColor: '#000',
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
    },
    backButtonText: {
      fontSize: 16,
      color: '#FFF',
    },
});


export const darkTheme = StyleSheet.create({


});

export const lightTheme = StyleSheet.create({


});