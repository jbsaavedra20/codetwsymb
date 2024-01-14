import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import { SVG3, SVG_Google } from '../../assets/js_svg/js_svg';

const LoginScreen = ({ navigation }) => {

    return (
        <ScrollView contentContainerStyle={styles.ScrollViewControl}
            keyboardShouldPersistTaps="handled">

            <View style={styles.svg3}>
                <SVG3 />
            </View>

            <View style={styles.containerForm}>
                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#434242', paddingBottom: 20 }}>TemblorSway</Text>
                <TextInput
                    style={styles.txtEntry}
                    placeholder='Correo electrónico' />
                <TextInput
                    style={styles.txtEntry}
                    placeholder='Contraseña'
                    secureTextEntry />

                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    paddingTop: 20
                }}>
                    <Text style={{ color: '#202020', paddingRight: 20 }} onPress={() => Alert.alert('Reestablecer contraseña.')}>
                        Olvidaste tu contraseña?
                    </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={styles.btnIniciarSesion}>
                        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: '#F1F1F1' }}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 20
                }}>
                    <View style={styles.line}></View>
                    <Text style={{ color: '#A3A1A1' }}>Sugerencias para iniciar</Text>
                    <View style={styles.line}></View>
                </View>


                <View style={{ paddingTop: 20 }}>
                    <TouchableOpacity style={styles.btnIniciarSesionGoogle}>
                        <View style={styles.svgGoogle}>
                            <SVG_Google />
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', color: '#202020' }}>Continuar con google</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10
            }}>
                <Text style={{ color: '#A3A1A1' }}>No tienes una cuenta?</Text>
                <Text style={{ color: '#00CC99', fontSize: 14, fontWeight: 'bold' }} onPress={() => { navigation.navigate('Register'); }}>Registrarme.</Text>
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

export default LoginScreen;
