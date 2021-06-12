import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FAB } from 'react-native-paper'
import styles from './styles'
import TopTab from '../TopTab'

const Tab = createBottomTabNavigator()

const BottomBar = () => (
  <Tab.Navigator
    tabBar={props => (
      <FAB
        style={styles.fab}
        icon='plus'
        {...props}
      />
    )}
  >
    <Tab.Screen name='TopTab' component={TopTab} />
  </Tab.Navigator>
)

export default BottomBar