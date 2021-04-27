import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login'

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Login" component={Login} />
  </App.Navigator>
);

export default Routes;
