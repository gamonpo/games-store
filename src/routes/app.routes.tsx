import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Search from '../pages/Search';

const App = createStackNavigator();

const Routes: React.FC = () => (
    <App.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <App.Screen name="Home" component={Home} />
        <App.Screen name="Login" component={Login} />
        <App.Screen name="Search" component={Search} />
    </App.Navigator>
);

export default Routes;
