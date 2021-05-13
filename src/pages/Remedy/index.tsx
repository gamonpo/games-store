import React, { useEffect, useState } from 'react';

import { Modal, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
    Container,
    Header,
    HeaderTitle,
    Item,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductPrice,
    ProductTrademark,
    ProductDeliveryTime,
    CartIcon,
    List,
    EnterButton,
    EnterTitle,
    IncreaseQuantity,
    DecreaseQuantity,
    QuantityView,
    QuantityTitle,
    CartBar,
    NoItems,
    NoItemsTitle,
    MiniCard,
    MiniCardText,
    ModalView,
    ModalButton,
    ModalButtonTitle,
    Info,
    Title,
    PriceLabel,
    Price,
    Card,
    NameLabel,
    Number,
    SecurityCode,
    ValidationExpire,
    PriceInfo,
    CardInfo,
    Payment,
} from './styles';

import { useCart } from '../../context/Cart';

interface Data {
    id: string;
    img: string;
    trademark: string;
    price: string;
    delivery: string;
    cart: number;
}

const Remedy: React.FC = () => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const { cart, setCart } = useCart([]);
    const [refresh, setRefresh] = useState(0);

    const [total, setTotal] = useState(0);
    const [name, setName] = useState('');
    const [trademark, setTrademark] = useState('');

    useEffect(() => {
        sumProducts();
        listProducts();
    }, [isFocused, cart, refresh]);

    const increaseQuantity = (item: Data) => {
        cart.forEach(element => {
            if (element.id === item.id) {
                item.cart += 1;
            }
        });

        setRefresh(refresh + 1);
    };

    const decreaseQuantity = (item: Data) => {
        const i = cart.find(element => element.id === item.id);

        if (i.cart <= 1) {
            const newList = cart.filter(element => element.id !== item.id);

            setCart(newList);
        }

        cart.forEach(element => {
            if (element.id === item.id) {
                if (item.cart > 1) {
                    item.cart -= 1;
                }
            }
        });
        setRefresh(refresh + 1);
    };

    const renderItem = ({ item }) => (
        <Item>
            <ProductCard>
                <ProductImage source={item.img} />

                <ProductInfo>
                    <ProductTrademark>{item.trademark}</ProductTrademark>

                    <ProductPrice>R$ {item.price}</ProductPrice>

                    <ProductDeliveryTime>{item.delivery}</ProductDeliveryTime>

                    <CartBar>
                        <CartIcon>
                            <Ionicons
                                name="cart-outline"
                                size={24}
                                color="white"
                            />
                        </CartIcon>
                        <QuantityView>
                            <QuantityTitle>{item.cart}</QuantityTitle>
                            <IncreaseQuantity
                                onPress={() => decreaseQuantity(item)}
                            >
                                <QuantityTitle>-</QuantityTitle>
                            </IncreaseQuantity>

                            <DecreaseQuantity
                                onPress={() => increaseQuantity(item)}
                            >
                                <QuantityTitle>+</QuantityTitle>
                            </DecreaseQuantity>
                        </QuantityView>
                    </CartBar>
                </ProductInfo>
            </ProductCard>
        </Item>
    );

    const continuePayment = () => {
        setModalVisible(!modalVisible);

        navigation.navigate('Message');
    };

    const sumProducts = () => {
        let aux = 0;
        cart.forEach(element => {
            if (element.cart > 1) {
                aux += element.cart * parseFloat(element.price);
            } else {
                aux += parseFloat(element.price);
            }
        });

        const finalValue = aux.toFixed(2).replace('.', ',');

        setTotal(finalValue);
    };

    const listProducts = () => {
        let auxName = '';
        let auxTrademark = '';
        cart.forEach(element => {
            auxName = `${element.name}`;
            auxTrademark = `${element.trademark}`;
        });

        setName(auxName);
        setTrademark(auxTrademark);
    };

    return (
        <Container>
            <Header>
                <HeaderTitle>Farmacare</HeaderTitle>
            </Header>

            {cart.length > 0 ? (
                <List
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={(item: Data) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <>
                            <Payment
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <MiniCard>
                                    <MiniCardText>
                                        X X X X X X X X X X X
                                    </MiniCardText>
                                </MiniCard>
                                <EnterButton>
                                    <EnterTitle>Pagamento</EnterTitle>
                                </EnterButton>
                            </Payment>

                            <Modal
                                transparent
                                animationType="slide"
                                visible={modalVisible}
                            >
                                <ModalView>
                                    <Info>
                                        <Title>{name}</Title>

                                        <Title>{trademark}</Title>

                                        <PriceInfo>
                                            <PriceLabel>Total: </PriceLabel>

                                            <Price>R$ {total}</Price>
                                        </PriceInfo>

                                        <Card>
                                            <NameLabel>
                                                Gabriel Monteiro
                                            </NameLabel>

                                            <CardInfo>
                                                <ValidationExpire>
                                                    03/29
                                                </ValidationExpire>

                                                <SecurityCode>120</SecurityCode>
                                            </CardInfo>

                                            <Number>1234 5678 1234 5678</Number>
                                        </Card>
                                    </Info>
                                    <CardInfo>
                                        <ModalButton
                                            onPress={() =>
                                                setModalVisible(!modalVisible)
                                            }
                                        >
                                            <ModalButtonTitle>
                                                Cancelar
                                            </ModalButtonTitle>
                                        </ModalButton>

                                        <ModalButton
                                            onPress={() => continuePayment()}
                                        >
                                            <ModalButtonTitle>
                                                Pagar
                                            </ModalButtonTitle>
                                        </ModalButton>
                                    </CardInfo>
                                </ModalView>
                            </Modal>
                        </>
                    }
                />
            ) : (
                <NoItems>
                    <NoItemsTitle>Você não</NoItemsTitle>
                    <NoItemsTitle>tem itens</NoItemsTitle>
                    <NoItemsTitle>no carrinho!</NoItemsTitle>
                    <NoItemsTitle>;/</NoItemsTitle>
                </NoItems>
            )}
            <View style={{ margin: 1 }} />
        </Container>
    );
};

export default Remedy;
