import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert, ActivityIndicator, Vibration } from 'react-native';
import { _SVG3, SVG_Google, SVG_left_Circle } from '../../assets/js_svg/js_svg';
import { ErrorMessage } from '../../hooks/errorMensaje';

import { firebaseConfig } from '../../firebaseconfig/firebaseConfig';
import { initializeApp } from 'firebase/app';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, createUserWithEmailAndPassword, updateProfile, initializeAuth, getReactNativePersistence } from "firebase/auth";
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const RegisterScreen = ({ navigation }) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [error, setError] = useState({ message: '', visible: false });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const btnRegistrarme = async () => {
    try {
      if (email.length === 0) {
        throw new Error('Por favor, ingrese su correo electrónico.');
      }
      if (nameUser.length === 0) {
        throw new Error('Por favor, ingrese un nombre de usuario.');
      }
      if (password.length === 0) {
        throw new Error('Por favor, ingrese una contraseña.');
      }
      if (password !== confirmPassword) {
        throw new Error('Las contraseñas no coinciden.');
      }
      if (password.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres.');
      }
      if (!isValidEmail(email)) {
        throw new Error('Por favor, ingrese un correo electrónico válido.');
      }
      setBotonDesactivado(true);
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      await updateProfile(user, { displayName: nameUser });
      Vibration.vibrate();
      setTimeout(() => {
        navigation.replace('Login');
      }, 500);
      setBotonDesactivado(false);
    }
    catch (error) {
      // Alert.alert('Error', `Error al crear usuario: ${error.message}`);
      setError({ message: error.message, visible: true });
    }
  };

  const btnRegisterWithGoogle = async () => {
  };
  return (
    <ScrollView contentContainerStyle={styles.ScrollViewControl}
      keyboardShouldPersistTaps="handled">

      <View style={styles.svg3}>
        <_SVG3 />
      </View>

      <View style={styles.containerForm}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
          <TouchableOpacity style={{ paddingBottom: 15 }} onPress={() => { navigation.navigate('Login'); }}>
            <SVG_left_Circle />
          </TouchableOpacity>
          <Text style={{ textAlign: 'left', fontSize: 30, fontWeight: 'bold', color: '#434242', paddingBottom: 20 }}>Crear cuenta</Text>
        </View>
        <ErrorMessage message={error.message} visible={error.visible} />
        <TextInput
          style={styles.txtEntry}
          placeholder='Correo electrónico'
          onChangeText={(Text) => setEmail(Text)}
          value={email}
          keyboardType='email-address' />

        <TextInput
          style={styles.txtEntry}
          placeholder='Nombre de usuario'
          onChangeText={(Text) => setNameUser(Text)}
          value={nameUser} />

        <TextInput
          style={styles.txtEntry}
          placeholder='Contraseña'
          secureTextEntry
          onChangeText={(Text) => setPassword(Text)}
          value={password} />

        <TextInput
          style={styles.txtEntry}
          placeholder='Vuelva a ingresar su contraseña'
          secureTextEntry
          onChangeText={(Text) => setConfirmPassword(Text)}
          value={confirmPassword} />

        <View style={{ paddingTop: 20 }}>
          <TouchableOpacity
            style={styles.btnIniciarSesion}
            onPress={btnRegistrarme}
            disabled={botonDesactivado}>
            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: '#F1F1F1' }}>Registrarme</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 20
        }}>
          <View style={styles.line}></View>
          <Text style={{ color: '#A3A1A1' }}>Sugerencias para registrarme</Text>
          <View style={styles.line}></View>
        </View>


        <View style={{ paddingTop: 20 }}>
          <TouchableOpacity
            style={styles.btnIniciarSesionGoogle}
            onPress={btnRegisterWithGoogle}>
            <View style={styles.svgGoogle}>
              <SVG_Google />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: '#202020' }}>Registrarme con google</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
      }}>
        <Text style={{ color: '#A3A1A1' }}>Ya tengo una cuenta.</Text>
        <Text style={{ color: '#00CC99', fontSize: 14, fontWeight: 'bold' }} onPress={() => { navigation.navigate('Login'); }}>Iniciar sesión.</Text>
      </View>
      
      <StatusBar style='auto' />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  svg3: {
    position: 'absolute',
    top: 0,
    zIndex: 0
  },
  svgGoogle: {
    height: 20,
    width: 20
  },
  ScrollViewControl: {
    paddingBottom: 20,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: "#F1F1F1",
  },
  containerForm: {
    padding: 30
  },
  txtEntry: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4.65,
    elevation: 7,
  },
  containerBtn: {
    flex: 1,
    paddingTop: 50
  },
  btnIniciarSesion: {
    backgroundColor: '#202020',
    padding: 17,
    borderRadius: 20
  },
  btnIniciarSesionGoogle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#DDDDDD',
    padding: 17,
    borderRadius: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A3A1A1',
    marginHorizontal: 10,
  },
});

export default RegisterScreen;