import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import colors from '../../style/colors';
import {
    Container,
    Header,
    HeaderTitle,
    SubHeader,
    MessageView,
    MessageText,
    EnterButton,
    EnterTitle,
    Indicator,
} from './styles';

import { useCart } from '../../context/Cart';

const Message: React.FC = () => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [activity, setActivity] = useState<boolean>(false);
    const [counter, setCounter] = useState(0);
    const [count, setCount] = useState(0);
    const { setCart } = useCart([]);

    const locationProduct = () => {
        Alert.alert(
            'Erro',
            'Serviço indisponível no momento.Tente mais tarde!',
        );
    };

    useEffect(() => {
        if (isFocused) {
            setActivity(true);

            setTimeout(() => {
                setCounter(0.1);
                setCount(10);
            }, 1000);

            setTimeout(() => {
                setCounter(0.2);
                setCount(9);
            }, 2000);

            setTimeout(() => {
                setCounter(0.3);
                setCount(8);
            }, 3000);

            setTimeout(() => {
                setCounter(0.4);
                setCount(7);
            }, 4000);

            setTimeout(() => {
                setCounter(0.5);
                setCount(6);
            }, 5000);

            setTimeout(() => {
                setCounter(0.6);
                setCount(5);
            }, 6000);

            setTimeout(() => {
                setCounter(0.7);
                setCount(4);
            }, 7000);

            setTimeout(() => {
                setCounter(0.8);
                setCount(3);
            }, 8000);

            setTimeout(() => {
                setCounter(0.9);
                setCount(2);
            }, 9000);
            setTimeout(() => {
                setCount(1);
                setCounter(1);
            }, 10000);

            setTimeout(() => {
                setCart([]);
                navigation.navigate('Main');
            }, 11000);
        }
    }, [isFocused, navigation]);

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

            {activity ? (
                <>
                    <MessageText
                        style={{ fontFamily: 'sora-regular', fontSize: 15 }}
                    >
                        Você será redirecionado a página principal
                    </MessageText>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <MessageText
                            style={{
                                fontFamily: 'sora-regular',
                                fontSize: 15,
                                right: 10,
                            }}
                        >
                            em
                        </MessageText>

                        <MessageText
                            style={{
                                fontSize: 15,
                                right: 5,
                            }}
                        >
                            {count}
                        </MessageText>
                        <MessageText
                            style={{ fontFamily: 'sora-regular', fontSize: 15 }}
                        >
                            segundos
                        </MessageText>
                    </View>

                    <Indicator>
                        <ProgressBar
                            progress={counter}
                            width={200}
                            animationType="timing"
                            color={colors.color_two}
                            height={10}
                        />
                    </Indicator>
                </>
            ) : (
                <View />
            )}

            <EnterButton onPress={() => locationProduct()}>
                <EnterTitle>Rastrear</EnterTitle>
            </EnterButton>
        </Container>
    );
};

export default Message;
