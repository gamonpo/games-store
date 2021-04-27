import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    LHeader,
    LHeaderTitle,
    DataGrid,
    Component,
    Label,
    Input,
    EnterButton,
    EnterTitle,
} from './styles';

const Login: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <LHeader>
                <LHeaderTitle>Farmacare</LHeaderTitle>
            </LHeader>

            <DataGrid>
                <Component>
                    <Label>Usuário</Label>

                    <Input />
                </Component>

                <Component>
                    <Label>Senha</Label>

                    <Input secureTextEntry />
                </Component>
            </DataGrid>

            <EnterButton onPress={() => navigation.navigate('Search')}>
                <EnterTitle>Entrar</EnterTitle>
            </EnterButton>
        </Container>
    );
};

export default Login;
