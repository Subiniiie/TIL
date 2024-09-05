import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignupScreen from '../../screens/auth/SignupScreen';
import { authNavigations }from '../../constants/'

export type AuthStackParamList = {
    [authNavigations.AUTH_HOME]: undefined;
    [authNavigations.LOGIN]: undefined;
    [authNavigations.SIGNUP]: undefined
}

// 파라미터로 같이 넘겨줄 값이 없기 때문이다.


const Stack = createStackNavigator<AuthStackParamList>();
function AuthStackNavigator() {

  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: 'white',
      },
      headerStyle: {
        backgroundColor: 'white',
        shadowColor: 'gray',
      },
      headerTitleStyle: {
        fontSize: 15,
      },
      
    }}>
        <Stack.Screen 
          name={authNavigations.AUTH_HOME} 
          component={AuthHomeScreen}
          options={{
            headerTitle: ' ',
            headerShown: false,
          }}
          />
        <Stack.Screen 
          name={authNavigations.LOGIN} 
          component={LoginScreen} 
          options={{
            headerTitle: '로그인',
          }}
        />
        <Stack.Screen 
          name={authNavigations.SIGNUP} 
          component={SignupScreen} 
          options={{
            headerTintColor: 'red',
          }}
        
        />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;