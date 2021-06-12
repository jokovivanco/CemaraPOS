import { StyleSheet } from 'react-native'
import { colors } from '../../assets/color'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashLogo: {
    height: 150,
    width: 150
  },
  footerContainer: {
    height: 56,
    alignItems: 'center'
  },
  footerText: {
    fontSize: 10,
    color: colors.footer
  },
})