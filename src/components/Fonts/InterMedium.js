import React from 'react'
import { Text } from 'react-native'
import styles from '../../screens/SplashScreen/styles'

const InterMedium = ({ text, style }) => {
  return (
    <Text style={[{ fontFamily: 'Inter-Medium' }, style]}>
      {text}
    </Text>
  )
}

export default InterMedium
