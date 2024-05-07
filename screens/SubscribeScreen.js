import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { validateEmail } from '../utils'

const SubscribeScreen = () => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)

  const handleEmailChange = (text) => {
    setEmail(text)
    setIsValidEmail(validateEmail(text))
  }

  const getEmail = () => {
    if (isValidEmail) {
      Alert.alert("Thanks for subscribing! Stay tuned.")
    } else {
      Alert.alert("Invalid email! Please enter a valid email address.")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/little-lemon-logo-grey.png")} style={styles.img} />
      <View style={{ padding: 30 }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Subscribe to our newsletter for our </Text>
        <Text style={{ fontSize: 20, fontWeight: '500', textAlign: 'center' }}>latest delicious recipes!</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Type your email'
        value={email}
        onChangeText={handleEmailChange}
        keyboardType='email-address'
      />
      <TouchableOpacity
        onPress={getEmail}
        style={[styles.btn, { backgroundColor: isValidEmail ? 'grey' : '#3f534b' }]}>
        <Text style={{ color: 'white' }}>Subscribe</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SubscribeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  img: {
    height: 250,
    width: 200,
    resizeMode: 'contain'
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    borderWidth: 2,
  },
  btn: {
    backgroundColor: "#3f534b",
    width: 300,
    height: 40,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
