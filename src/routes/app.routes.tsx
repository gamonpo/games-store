import React from 'react';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import Main from '../pages/Main';
import Cart from '../pages/Cart';

const App = createStackNavigator();
const Tab = createBottomTabNavigator();

function Menu() {
    const theme = useTheme();

    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: `${theme.colors.secondary_purple}`,
                inactiveTintColor: `${theme.colors.primary_dark}`,
                showLabel: false,
                style: {
                    backgroundColor: `${theme.colors.primary_white}`,
                    borderTopWidth: 1,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    height: RFValue(80),
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Main') {
                        return (
                            <Feather name="home" size={size} color={color} />
                        );
                    }
                    if (route.name === 'Search') {
                        return (
                            <Feather name="search" size={size} color={color} />
                        );
                    }
                    if (route.name === 'Cart') {
                        return (
                            <Feather
                                name="shopping-bag"
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
            })}
        >
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    );
}

const Routes: React.FC = () => (
    <NavigationContainer>
        <App.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <App.Screen name="Menu" component={Menu} />
        </App.Navigator>
    </NavigationContainer>
);

export default Routes;
