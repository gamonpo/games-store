import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

import { ThemeProvider } from 'styled-components';
import Routes from './src/routes';

import { CartProvider } from './src/hooks/Cart';
import theme from './src/global/theme';

const App: React.FC = () => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar />

            <CartProvider>
                <Routes />
            </CartProvider>
        </ThemeProvider>
    );
};

export default App;
