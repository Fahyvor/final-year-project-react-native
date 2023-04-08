import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './project/Welcome';
import Login from './project/Login';
import Signup from './project/Signup';
import Homepage from './project/Homepage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Homepage' component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App