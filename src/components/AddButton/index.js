import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../assets/color'

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log('pressed')}>
      <Icon name='plus' size={14} color={colors.white} />
    </TouchableOpacity>
  )
}

export default AddButton
