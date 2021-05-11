import React, { useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
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
    const { cart, setCart } = useCart([]);
    const [refresh, setRefresh] = useState(0);

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

    useEffect(() => {}, [isFocused, cart, refresh]);

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
                            <EnterButton>
                                <EnterTitle>Pagamento</EnterTitle>
                            </EnterButton>
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
        </Container>
    );
};

export default Remedy;
