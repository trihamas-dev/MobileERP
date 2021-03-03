import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, LoanCalculator, Splash} from '../Pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="LoanCalculator">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoanCalculator"
        component={LoanCalculator}
        options={{
          headerShown: true,
          title: 'Loan Calculator',
          headerStyle: {
            backgroundColor: '#E22D2D',
            height: 40,
          },
          headerTintColor: '#E2DCDC',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '700',
            letterSpacing: 2,
            fontFamily: 'roboto',
            fontSize: 18,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
