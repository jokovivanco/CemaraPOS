import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { colors } from '../../assets/color'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

const SearchBar = () => (
  <TouchableOpacity onPress={() => { }}>
    <View style={styles.container}>
      <Icon name='search' size={24} color={colors.white} />
    </View>
  </TouchableOpacity>
)

export default SearchBar
