import React from 'react'
import LeftDrawer from './LeftDrawer'
import { View, TouchableWithoutFeedback, Text } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  LoginScreen,
  SplashScreen,
  ChargeScreen
} from '../screens'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../assets/color'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LeftDrawer'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LeftDrawer" component={LeftDrawer} options={{ headerShown: false }} />
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
