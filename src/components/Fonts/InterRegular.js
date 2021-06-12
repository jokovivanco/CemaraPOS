import React from 'react'
import { Text } from 'react-native'
import styles from '../../screens/SplashScreen/styles'

const InterRegular = ({ text, style }) => {
  return (
    <Text style={[{ fontFamily: 'Inter-Regular' }, style]}>
      {text}
    </Text>
  )
}

export default InterRegular
