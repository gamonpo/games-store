import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    NothingYouCouldDo_400Regular,
} from '@expo-google-fonts/nothing-you-could-do';

import Routes from './src/routes';

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        NothingYouCouldDo_400Regular,
        'sora-regular': require('./assets/fonts/Sora-Regular.ttf'),
        'sora-thin': require('./assets/fonts/Sora-Thin.ttf'),
        'sora-bold': require('./assets/fonts/Sora-Bold.ttf'),
        'sora-extralight': require('./assets/fonts/Sora-ExtraLight.ttf'),
        'sora-semibold': require('./assets/fonts/Sora-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Routes />
        </NavigationContainer>
    );
};

export default App;
