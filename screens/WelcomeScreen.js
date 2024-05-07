import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/little-lemon-logo.png")}
      style={styles.img}
      />

      <View style={{padding: 30,}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Little Lemon your local </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}} > Mediterranen Bistro</Text>
      </View>

      <TouchableOpacity 
      onPress={() => navigation.navigate("SubscribeScreen") }
      style={styles.btn}>
        <Text style={{color:'white'}}> Newsletter</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding: 20

  },
  img:{
    height: 250,
    width: 200,
    // this for adjusting image on a screen
    resizeMode: 'contain'
  },
  btn:{
    backgroundColor: "#3f534b",
    width: 300,
    height: 40,
    borderRadius: 10,
    padding: 10,
    justifyContent:'center',
    alignItems:'center',
    // marginTop: 150,
    position: 'absolute',
    bottom: 25,
  }
})