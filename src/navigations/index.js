import React from 'react'
import { View, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  LoginScreen,
  SplashScreen,
  BestScreen,
  RecentScreen,
  ActivityScreen,
  InventoryScreen,
  OrdersScreen,
  SettingsScreen,
  ChargeScreen
} from '../screens'
import IconStar from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../assets/color'
import DrawerContent from '../components/DrawerContent'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBottomContent from '../components/TabBottomContent'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()
const Drawer = createDrawerNavigator()
const TabBottom = createBottomTabNavigator()

const MyDrawer = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
    <Drawer.Screen name="MySecondStack" component={MySecondStack} options={{
      swipeEnabled: false,
    }} />
  </Drawer.Navigator>
)

const MyTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconColor

          if (route.name === 'BestScreen') {
            iconColor = focused
              ? colors.active
              : colors.inactive
            return <IconStar name='star' size={20} color={iconColor} />
          } else {
            iconColor = focused
              ? colors.active
              : colors.inactive
            return <Icon name='history' size={20} color={iconColor} />
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: colors.active,
        inactiveTintColor: colors.inactive,
        iconStyle: {
          justifyContent: 'center',
          alignItems: 'center'
        },
        showIcon: true,
        style: {
          backgroundColor: colors.primary,
        },
        indicatorStyle: {
          backgroundColor: colors.white
        },
        labelStyle: {
          fontWeight: 'bold',
          letterSpacing: 2
        }
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
}

const MyOptions = (props) => {
  return {
    animationEnabled: false,
    headerStyle: {
      backgroundColor: colors.primary,
      elevation: 0
    },
    headerTintColor: colors.white,
    headerLeft: () => {
      return (
        <TouchableWithoutFeedback onPress={() => props.navigation.openDrawer()}>
          <View style={{ width: 56, height: 56, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='bars' size={24} color={colors.white} />
          </View>
        </TouchableWithoutFeedback>
      )
    },
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => { console.log('pressed') }}>
          <View style={{ width: 56, height: 56, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='search' size={24} color={colors.white} />
          </View>
        </TouchableOpacity>
      )
    }
  }
}

const MyThirdStack = () => (
  <TabBottom.Navigator tabBar={props => <TabBottomContent {...props} />}>
    <TabBottom.Screen name='MyTabNavigator' component={MyTabNavigator} />
  </TabBottom.Navigator>
)

const MySecondStack = ({ navigation }) => (
  <Stack.Navigator screenOptions={MyOptions}>
    <Stack.Screen name="MyThirdStack" component={MyThirdStack} options={{
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

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyDrawer'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="ChargeScreen" component={ChargeScreen} options={{
          title: 'Charge',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0
          },
          headerRight: () => (
            <TouchableWithoutFeedback onPress={() => alert('Imagine you have just clicked next')}>
              <View style={{ width: 75, height: 56, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: colors.white, fontFamily: 'Roboto-Medium', lineHeight: 28 }}>Next</Text>
              </View>
            </TouchableWithoutFeedback>
          ),
          headerTintColor: colors.white,
          headerLeft: () => {
            const navigation = useNavigation()
            return (
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <View style={{ width: 56, height: 56, justifyContent: 'center', alignItems: 'center' }}>
                  <Icon name='chevron-left' size={24} color={colors.white} />
                </View>
              </TouchableWithoutFeedback>
            )
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
