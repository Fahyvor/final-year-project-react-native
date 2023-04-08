import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.welcomeContainer}>
        <Image source={Logo} style={styles.logo}/>
        <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor: '#281d5fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    logo: {
        width: 200,
        height: 200,
    },
    textContainer: {
        borderRadius: 30,
        backgroundColor: '#fbbb44ff',
        padding: 10,
        width: 180,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 700,
    }
})

export default Welcome