import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';

import {
    Container,
    Header,
    HeaderTitle,
    LButton,
    LTitle,
    CButton,
    CTitle,
} from './styles';

const Home: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Header>
                <HeaderTitle>Farmacare</HeaderTitle>
            </Header>

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
