import React, { useRef } from 'react';

import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    HeaderTitle,
    DataGrid,
    Component,
    Label,
    Input,
    EnterButton,
    EnterTitle,
} from './styles';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const passwordInputRef = useRef<typeof Input>(null);

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header>
                    <HeaderTitle>Farmacare</HeaderTitle>
                </Header>

                <DataGrid>
                    <Component>
                        <Label>Usuário</Label>

                        <Input
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                passwordInputRef.current?.focus();
                            }}
                        />
                    </Component>

                    <Component>
                        <Label>Senha</Label>

                        <Input
                            ref={passwordInputRef}
                            secureTextEntry
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="send"
                        />
                    </Component>

                    <EnterButton onPress={() => navigation.navigate('Menu')}>
                        <EnterTitle>Entrar</EnterTitle>
                    </EnterButton>
                </DataGrid>
            </ScrollView>
        </Container>
    );
};

export default Login;
