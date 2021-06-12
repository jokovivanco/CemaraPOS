import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen')
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.splashContainer}>
        <Image source={require('../../assets/cemara_assistant_logo.png')} style={styles.splashLogo} />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Doubleism Project</Text>
      </View>
    </View>
  )
}

export default SplashScreen
