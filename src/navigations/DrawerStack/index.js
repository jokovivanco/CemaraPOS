import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ActivityScreen, InventoryScreen, OrdersScreen, SettingsScreen } from '../../screens'
import styles from './styles'
import { colors } from '../../assets/color'
import { DrawerOpener, SearchBar } from '../../components'
import BottomBar from '../BottomBar'

const Stack = createStackNavigator()

const CustomOptions = (props) => {
  return {
    animationEnabled: false,
    headerStyle: styles.header,
    headerTintColor: colors.white,
    headerLeft: () => <DrawerOpener {...props} />,
    headerRight: () => <SearchBar {...props} />
  }
}

const DrawerStack = () => (
  <Stack.Navigator screenOptions={CustomOptions}>
    <Stack.Screen name="BottomBar" component={BottomBar} options={{
      title: 'Cashier',
    }} />
    <Stack.Screen name="ActivityScreen" component={ActivityScreen} options={{
      title: 'Activity'
    }} />
    <Stack.Screen name="InventoryScreen" component={InventoryScreen} options={{
      title: 'Inventory'
    }} />
    <Stack.Screen name="OrdersScreen" component={OrdersScreen} options={{
      title: 'Orders'
    }} />
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{
      title: 'Settings'
    }} />
  </Stack.Navigator>
)

export default DrawerStack