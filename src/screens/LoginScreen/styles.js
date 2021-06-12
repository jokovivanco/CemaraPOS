import { StyleSheet } from 'react-native'
import { colors } from '../../assets/color'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30
  },
  logo: {
    height: 150,
    width: 150
  },
  inputContainer: {
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: '80%',
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: colors.gray,
    paddingLeft: 22
  },
  button: {
    backgroundColor: colors.primary,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center'
  }
})