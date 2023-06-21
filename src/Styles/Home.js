import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 3,
        height: '100%',
        backgroundGradient: 'linear-gradient(45dg, #5ffb95, #5cfbb5, #5ffbf1)'
    },
    sectionOne: {
      marginTop: '60%',
      alignItems: 'center'
    },
    sectionTwo: {
        flex:1,
        marginTop: '30%',
        alignItems: 'center',
        
        

    },
    fontsOne: {
      fontSize: 25
    },

    fontsTwo: {
        backgroundColor: 'gray',
        fontSize: 20,
        marginTop: '2%',
        borderRadius: 2.5,
        padding:2,
        
    },

    btn: {
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    }
  });
  