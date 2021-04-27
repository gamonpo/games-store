import React from 'react';

import {
    Container,
    LHeader,
    LHeaderTitle,
    LButton,
    LTitle,
    CButton,
    CTitle,
} from './styles';

const Login: React.FC = () => (
    <Container>
        <LHeader>
            <LHeaderTitle>Farmacare</LHeaderTitle>
        </LHeader>
        <LButton>
            <LTitle>Login</LTitle>
        </LButton>

        <CButton>
            <CTitle>Cadastrar</CTitle>
        </CButton>
    </Container>
);

export default Login;
