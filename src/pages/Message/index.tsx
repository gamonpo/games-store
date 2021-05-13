import React from 'react';
import { Alert } from 'react-native';

import {
    Container,
    Header,
    HeaderTitle,
    SubHeader,
    MessageView,
    MessageText,
    EnterButton,
    EnterTitle,
} from './styles';

const Message: React.FC = () => {
    return (
        <Container>
            <Header>
                <HeaderTitle>Farmacare</HeaderTitle>
            </Header>

            <SubHeader>
                <MessageView>
                    <MessageText>Pagamento Realizado</MessageText>

                    <MessageText>com sucesso!</MessageText>

                    <MessageText>:)</MessageText>
                </MessageView>

                <MessageView>
                    <MessageText style={{ fontFamily: 'sora-regular' }}>
                        Obrigado por {'\n'} confiar na gente! {'\n'}
                    </MessageText>
                </MessageView>
            </SubHeader>

            <EnterButton
                onPress={() =>
                    Alert.alert(
                        'Erro',
                        'Serviço indisponível no momento.Tente mais tarde!',
                    )
                }
            >
                <EnterTitle>Rastrear</EnterTitle>
            </EnterButton>
        </Container>
    );
};

export default Message;
