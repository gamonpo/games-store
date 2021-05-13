import React, { useRef, useState } from 'react';

import { Alert, ScrollView } from 'react-native';

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
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const checkData = () => {
        if (!email) {
            Alert.alert('Erro', 'Insira o e-mail');
        } else if (!password) {
            Alert.alert('Erro', 'Insira o e-mail');
        } else {
            navigation.navigate('Menu');
        }
    };

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
                            onChangeText={e => setEmail(e)}
                            value={email}
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
                            onChangeText={p => setPassword(p)}
                            value={password}
                            returnKeyType="send"
                        />
                    </Component>

                    <EnterButton onPress={() => checkData()}>
                        <EnterTitle>Entrar</EnterTitle>
                    </EnterButton>
                </DataGrid>
            </ScrollView>
        </Container>
    );
};

export default Login;
