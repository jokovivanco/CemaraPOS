import { StyleSheet } from 'react-native'
import { colors } from '../../assets/color'

export default StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    backgroundColor: colors.secondary,
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    marginRight: 27,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    right: 0
  }
})