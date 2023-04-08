import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.loginContainer}>
        <Text style={styles.loginHeader}>Login/Sign Up</Text>
        <View style={styles.inputContainer}>
        <Text style={styles.inputHeader}>Login</Text>
        <TextInput style={styles.textInput}>
            <Text style={styles.textPlaceHolder}>Username</Text>
        </TextInput>
        <TextInput style={styles.textInput} secureTextEntry={true}>
            <Text style={styles.textPlaceHolder}>Password</Text>
        </TextInput>
        </View>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Ionicons name='finger-print' size={50} style={styles.fingerPrintIcon}/>
        <TouchableOpacity>
            <Text style={styles.fingerPrintText}>Use Fingerprint</Text>
        </TouchableOpacity>
        <View style={styles.newUser}>
            <Text style={styles.newUserText}>New User?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: '#281d5fff',
        height: '100%',
        alignItems: 'center',
        paddingTop: 30,
    },
    loginHeader: {
        color: 'white',
        fontSize: 22,
    },
    inputContainer: {
        alignSelf: 'flex-start',
        width: 340,
        marginTop: 30,
        gap: 20,
        paddingHorizontal: 10,
    },
    inputHeader: {
        color: 'white',
        fontSize: 20,
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: 'rgb(55, 192, 252)',
        marginLeft: 15,
    },
    textPlaceHolder: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 13,
    },
    loginButton: {
        backgroundColor: 'rgb(251, 187, 68)',
        borderRadius: 10,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        alignSelf: 'center',
        marginTop: 40,
    },
    loginButtonText: {
        fontSize: 18,
    }, 
    fingerPrintIcon: {
        color: 'rgb(55, 192, 252)',
        marginTop: 25,
    },
    fingerPrintText: {
        color: 'rgb(251, 187, 68)',
        marginTop: 10,
        fontSize: 17,
    },
    newUser: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    newUserText: {
        color: 'white',
        fontSize: 25,
    },
    createAccountText: {
        color: '#fbbb44ff',
    },
})

export default Login