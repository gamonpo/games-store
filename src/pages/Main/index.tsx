import React from 'react';

import { Container, Header, HeaderTitle, SubHeader, SubTitle } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <HeaderTitle>Farmacare</HeaderTitle>
            </Header>

            <SubHeader>
                <SubTitle>Bem Vindo...</SubTitle>
            </SubHeader>
        </Container>
    );
};

export default Main;
