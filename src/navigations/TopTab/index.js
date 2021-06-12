import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { colors } from '../../assets/color'
import FA from 'react-native-vector-icons/FontAwesome'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'
import { BestScreen, RecentScreen } from '../../screens'

const Tab = createMaterialTopTabNavigator()

const CustomOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconColor
    if (route.name === 'BestScreen') {
      iconColor = focused
        ? colors.active
        : colors.inactive
      return <FA name='star' size={20} color={iconColor} />
    } else {
      iconColor = focused
        ? colors.active
        : colors.inactive
      return <FA5 name='history' size={20} color={iconColor} />
    }
  }
})

const TopTab = () => (
  <Tab.Navigator
    screenOptions={CustomOptions}
    tabBarOptions={{
      activeTintColor: colors.active,
      inactiveTintColor: colors.inactive,
      showIcon: true,
      iconStyle: styles.icon,
      style: styles.tab,
      indicatorStyle: styles.indicator,
      labelStyle: styles.label
    }}
  >
    <Tab.Screen name="BestScreen" component={BestScreen} options={{
      tabBarLabel: 'best'
    }} />
    <Tab.Screen name="RecentScreen" component={RecentScreen} options={{
      tabBarLabel: 'recent'
    }} />
  </Tab.Navigator>
)

export default TopTab