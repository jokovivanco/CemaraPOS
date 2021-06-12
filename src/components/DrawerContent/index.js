import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper'
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome5'

const DrawerContent = (props) => {
  const [active, setActive] = React.useState('Cashier')

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userSection}>
            <Title style={styles.title}>Anjab Falahi C</Title>
            <Caption style={styles.caption}>Owner</Caption>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              icon={({ color, size }) => (
                <Icon name='cash-register' size={size} color={color} />
              )}
              label='Cashier'
              onPress={() => {
                props.navigation.navigate('MyTabNavigator')
                setActive('Cashier')
              }}
              active={active === 'Cashier'}
            />
            <Drawer.Item
              icon={({ color, size }) => (
                <Icon name='history' size={size} color={color} />
              )}
              label='Activity'
              onPress={() => {
                props.navigation.navigate('ActivityScreen')
                setActive('Activity')
              }}
              active={active === 'Activity'}
            />
            <Drawer.Item
              icon={({ color, size }) => (
                <Icon name='archive' size={size} color={color} />
              )}
              label='Inventory'
              onPress={() => {
                props.navigation.navigate('InventoryScreen')
                setActive('Inventory')
              }}
              active={active === 'Inventory'}
            />
            <Drawer.Item
              icon={({ color, size }) => (
                <Icon name='box' size={size} color={color} />
              )}
              label='Orders'
              onPress={() => {
                props.navigation.navigate('OrdersScreen')
                setActive('Orders')
              }}
              active={active === 'Orders'}
            />
            <Drawer.Item
              icon={({ color, size }) => (
                <Icon name='cog' size={size} color={color} />
              )}
              label='Settings'
              onPress={() => {
                props.navigation.navigate('SettingsScreen')
                setActive('Settings')
              }}
              active={active === 'Settings'}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default DrawerContent
