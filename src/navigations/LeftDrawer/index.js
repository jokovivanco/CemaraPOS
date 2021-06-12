import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../../components/DrawerContent'
import DrawerStack from '../DrawerStack'

const Drawer = createDrawerNavigator()

const LeftDrawer = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
    <Drawer.Screen name="DrawerStack" component={DrawerStack} options={{
      swipeEnabled: false,
    }} />
  </Drawer.Navigator>
)

export default LeftDrawer