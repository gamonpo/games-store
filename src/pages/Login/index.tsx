import React from 'react';

import { Container,
     LHeader,
     LHeaderTitle,


     LButton,
     LTitle }

     from './styles';

const Login: React.FC = () => {
    return (
        <Container>
            <LHeader>
                <LHeaderTitle>Farmacare</LHeaderTitle>
            </LHeader>
            <LButton>
                <LTitle>Login</LTitle>
            </LButton>
        </Container>
    )
}

export default Login;
