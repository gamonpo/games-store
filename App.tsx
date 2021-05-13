import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    NothingYouCouldDo_400Regular,
} from '@expo-google-fonts/nothing-you-could-do';

import Routes from './src/routes';

import CartProvider from './src/context/Cart';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        NothingYouCouldDo_400Regular,
        'sora-regular': require('./assets/fonts/Sora-Regular.ttf'),
        'sora-thin': require('./assets/fonts/Sora-Thin.ttf'),
        'sora-bold': require('./assets/fonts/Sora-Bold.ttf'),
        'sora-extralight': require('./assets/fonts/Sora-ExtraLight.ttf'),
        'sora-semibold': require('./assets/fonts/Sora-SemiBold.ttf'),
        'ocrastd-regular': require('./assets/fonts/OCRASTD-Regular.ttf'),
        'rajdhani-light': require('./assets/fonts/Rajdhani-Light.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <CartProvider>
            <StatusBar style="auto" />
            <Routes />
        </CartProvider>
    );
};

export default App;
