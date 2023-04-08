import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Signup = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.signupContainer}>
      <Text style={styles.signupHeader}>Create Account</Text>
      <TextInput style={styles.textInput}>
        <Text>First Name</Text>
      </TextInput>
      <TextInput style={styles.textInput}>
        <Text>Last Name</Text>
      </TextInput>
      <TextInput style={styles.textInput}>
        <Text>Middle Name</Text>
      </TextInput>
      <TextInput style={styles.textInput}>
        <Text>Username</Text>
      </TextInput>
      <TextInput style={styles.textInput}>
        <Text>Phone Number</Text>
      </TextInput>
      <TextInput style={styles.textInput}>
        <Text>Email Address</Text>
      </TextInput>
      <TextInput style={styles.textInput}>
        <Text>Contact Address</Text>
      </TextInput>
      <TextInput style={styles.textInput}>
        <Text>Payment PIN</Text>
      </TextInput>
      <TextInput style={styles.textInput} clearTextOnFocus={true} secureTextEntry={true}>
        <Text>Password</Text>
      </TextInput>
      <TextInput style={styles.textInput} clearTextOnFocus={true} secureTextEntry={true}>
        <Text>Confirm Password</Text>
      </TextInput>
      <TouchableOpacity style={styles.createContainer} onPress={() => navigation.navigate('Homepage')}>
        <Text style={styles.createWriteup}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    signupContainer: {
        backgroundColor: '#281d5fff',
        height: '100%',
        flex: 1,
    },
    signupHeader: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 30,
        paddingBottom: 20,
    },
    textInput: {
        marginHorizontal: 20,
        color: 'rgba(255, 255, 255, 0.5)',
        paddingBottom: 9,
        borderBottomWidth: 2,
        borderBottomColor: 'rgb(55, 192, 252)',
    },
    createContainer: {
        backgroundColor: 'rgb(251, 187, 68)',
        boderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 200,
        height: 50,
        marginTop: 35,
        alignSelf: 'center',
    },
    createWriteup: {
        color: 'rgb(225, 225, 225)',
        fontSize: 18,
        fontWeight: 700,
    }
})

export default Signup