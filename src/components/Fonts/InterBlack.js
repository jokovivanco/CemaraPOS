import React from 'react'
import { Text } from 'react-native'
import styles from '../../screens/SplashScreen/styles'

const InterBlack = ({ text, style }) => {
  return (
    <Text style={[{ fontFamily: 'Inter-Black' }, style]}>
      {text}
    </Text>
  )
}

export default InterBlack
