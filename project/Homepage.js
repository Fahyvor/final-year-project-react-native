import { AntDesign } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import {MasterCard} from '../assets/images/mastercard.png'
import {VisaCard} from '../assets/images/visa.png'
import { VerveCard } from '../assets/images/verve.svg'

const Homepage = () => {
  return (
    <View style={styles.homepage}>
      <View style={styles.iconContainer}>
      <AntDesign name='user' size={40} style={styles.userIcon}/>
      </View>
      <View style={styles.welcomeText}>
        <Text style={styles.hi}>Hi Fahyvor,</Text>
        <Text style={styles.welcome}>Welcome Back</Text>
      </View>
      <View style={styles.cards}>
        <View style={styles.masterCard}>
          <Image source={MasterCard}/>
        </View>
        <View style={styles.visaCard}>
          <Image source={VisaCard}/>
        </View>
        <View style={styles.verveCard}>
          <Image source={VerveCard}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homepage: {
    backgroundColor: '#281d5fff',
    height: 100,
    alignItems: 'center',
    paddingTop: 10,
  },
  iconContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'end',
    gap: 8,
  },  
  userIcon: {
    color: '#281d5fff',
  },
  cards: {
    flexDirection: 'row',
  },
  hi: {
    fontSize: 20,
    color: 'white',
  },
  welcome: {
    fontSize: 30,
    color: 'white',
  },
  masterCard: {
    // backgroundColor: 'white',
    borderRadius: 10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Homepage;