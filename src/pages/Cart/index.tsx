import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Data, useCart } from '../../hooks/Cart';

import {
    Container,
    Header,
    Text,
    Item,
    Title,
    ProductImage,
    Price,
    Unit,
    Info,
    Button,
    Icon,
} from './styles';

interface TotalProps {
    subtotal: number;
    frete: number;
}

const Cart: React.FC = () => {
    const { cart, setCart } = useCart();
    const [flag, setFlag] = useState<number>(0);
    const [total, setTotal] = useState<TotalProps>({
        subtotal: 0,
        frete: 0,
    });

    const addProduct = (item: Data) => {
        item.unit += 1;

        setFlag(flag + 1);
        setCart(cart);
    };

    const removeProduct = (item: Data) => {
        const exist = cart.find((element: Data) => element.name === item.name);

        if (exist.unit > 1) {
            item.unit -= 1;

            setFlag(flag + 1);
            setCart(cart);
        } else {
            const newCart = cart.filter(
                (element: Data) => element.name !== item.name,
            );

            setFlag(flag + 1);
            setCart(newCart);
        }
    };

    const sumProducts = () => {
        if (cart.length > 0) {
            let aux = 0;
            cart.forEach(element => {
                if (element.unit > 1) {
                    aux += element.unit * parseFloat(element.price);
                } else {
                    aux += parseFloat(element.price);
                }
            });

            if (aux <= 250) {
                let frete_aux = 0;

                cart.map(c => {
                    frete_aux += c.unit;
                });

                const frete = 10 * frete_aux;

                const finalValue = {
                    subtotal: aux,
                    frete,
                };

                setTotal(finalValue);
            } else {
                const finalValue = {
                    subtotal: aux,
                    frete: 0,
                };

                setTotal(finalValue);
            }
        }
    };

    useEffect(() => {
        sumProducts();
    }, [useIsFocused, cart, flag]);

    return (
        <Container>
            <Header>
                <Text>Meu carrinho</Text>
            </Header>

            {cart.map(item => (
                <Item key={item.id}>
                    <Info>
                        <Title>{item.name}</Title>
                        <ProductImage source={item.image} />
                    </Info>

                    <Info>
                        <Price>R$ {item.price}</Price>
                        <Unit>Qtd: {item.unit}</Unit>

                        <Info style={{ flexDirection: 'row' }}>
                            <Button
                                name="plus"
                                onPress={() => addProduct(item)}
                            >
                                <Icon name="plus" />
                            </Button>
                            <Button
                                name="minus"
                                onPress={() => removeProduct(item)}
                            >
                                <Icon name="minus" />
                            </Button>
                        </Info>
                    </Info>
                </Item>
            ))}

            <Title>
                SubTotal: R$ {total.subtotal.toFixed(2).replace('.', ',')}
            </Title>
            <Title>Frete: R$ {total.frete.toFixed(2).replace('.', ',')}</Title>
            <Title>
                Total: R$
                {(total?.subtotal + total?.frete).toFixed(2).replace('.', ',')}
            </Title>
        </Container>
    );
};

export default Cart;
