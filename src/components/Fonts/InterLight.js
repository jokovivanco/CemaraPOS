import React from 'react'
import { Text } from 'react-native'
import styles from '../../screens/SplashScreen/styles'

const InterLight = ({ text, style }) => {
  return (
    <Text style={[{ fontFamily: 'Inter-Light' }, style]}>
      {text}
    </Text>
  )
}

export default InterLight
