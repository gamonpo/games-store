import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';

import {
    Container,
    LHeader,
    LHeaderTitle,
    LButton,
    LTitle,
    CButton,
    CTitle,
} from './styles';

const Home: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <LHeader>
                <LHeaderTitle>Farmacare</LHeaderTitle>
            </LHeader>

            <LButton onPress={() => navigation.navigate('Login')}>
                <LTitle>Login</LTitle>
            </LButton>

            <CButton
                onPress={() =>
                    Alert.alert('Indisponível', 'Em desenvolvimento')
                }
            >
                <CTitle>Cadastrar</CTitle>
            </CButton>
        </Container>
    );
};

export default Home;
