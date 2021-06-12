import React from 'react'
import { Text } from 'react-native'
import styles from '../../screens/SplashScreen/styles'

const InterBold = ({ text, style }) => {
  return (
    <Text style={[{ fontFamily: 'Inter-Bold' }, style]}>
      {text}
    </Text>
  )
}

export default InterBold
