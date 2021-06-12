import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { colors } from '../../assets/color'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

const DrawerOpener = ({ navigation }) => (
  <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
    <View style={styles.container}>
      <Icon name='bars' size={24} color={colors.white} />
    </View>
  </TouchableWithoutFeedback>
)

export default DrawerOpener
