import { StyleSheet } from "react-native";
import { colors } from "../../assets/color";

export default StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab: {
    backgroundColor: colors.primary
  },
  indicator: {
    backgroundColor: colors.white
  },
  label: {
    fontWeight: 'bold',
    letterSpacing: 2
  }
})