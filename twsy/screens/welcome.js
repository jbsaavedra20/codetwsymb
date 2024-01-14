import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Vibration } from 'react-native';
import { SVG1 } from '../assets/js_svg/js_svg';


const WelcomeScreen = ({ navigation }) => {

  //Diseño App
  return (
    <View style={styles.container}>

      <View
        style={[styles.containerOne, { flex: 7 }]}>
        <View style={styles.imgContainer}>
          <View style={styles.svgIcon}>
            <SVG1 />
          </View>
          <Image
            source={require('../assets/banners/img0.jpg')}
            style={styles.imgBanner} />
        </View>
      </View>
      <View style={[styles.containerTwo, { flex: 3 }]}>
        <Text style={styles.lblTitle}>Bienvenido a</Text>
        <Text style={styles.lblSubTitle}>Sismos bajo control, tu escudo sísmico personal.</Text>
        <TouchableOpacity
          style={styles.btnComenzar}
          onPress={() => {Vibration.vibrate(); navigation.replace('Login');}}>
          <Text style={styles.lblComenzar}>Comenzar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style='auto' backgroundColor='#FFFFFF' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20 * 1.3,
  },
  //Container One
  containerOne: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    height: '90%',
    width: '90%',
    backgroundColor: '#44BE89',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4.65,
    elevation: 10,
  },
  imgBanner: {
    height: '100%',
    width: '100%',
    borderRadius: 30
  },
  svgIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1
  },



  //Container Two
  containerTwo: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 30,
    gap: 20,
    justifyContent: 'center'
  },
  lblTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#3F3F3F'
  },
  lblSubTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#565656'
  },
  btnComenzar: {
    backgroundColor: '#00CC99',
    padding: 20,
    borderRadius: 30,
  },
  lblComenzar: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  }
});

export default WelcomeScreen;