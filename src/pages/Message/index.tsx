import React from 'react';

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

            <EnterButton>
                <EnterTitle>Rastrear</EnterTitle>
            </EnterButton>
        </Container>
    );
};

export default Message;
