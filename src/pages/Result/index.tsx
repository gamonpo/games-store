import React from 'react';
import { ScrollView } from 'react-native';

import {
    Container,
    Header,
    HeaderTitle,
    SubHeader,
    SubTitle,
    IconComponent,
    IconImage,
} from './styles';

const Result = () => {
    return (
        <Container>
            <ScrollView>
                <Header>
                    <HeaderTitle>Farmcare</HeaderTitle>

                    <SubHeader>
                        <SubTitle>Resultados</SubTitle>

                        <IconComponent>
                            <IconImage />
                        </IconComponent>
                    </SubHeader>
                </Header>
            </ScrollView>
        </Container>
    );
};

export default Result;
