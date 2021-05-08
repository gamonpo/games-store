import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

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
} from './styles';

interface Data {
    id: string;
    img: string;
    trademark: string;
    price: string;
    delivery: string;
}

const Remedy: React.FC = () => {
    const route = useRoute();

    const { item }: Data = route.params;

    return (
        <Container>
            <Header>
                <HeaderTitle>Farmacare</HeaderTitle>
            </Header>

            <Item>
                <ProductCard>
                    <ProductImage source={item.img} />

                    <ProductInfo>
                        <ProductTrademark>{item.trademark}</ProductTrademark>

                        <ProductPrice>R$ {item.price}</ProductPrice>

                        <ProductDeliveryTime>
                            {item.delivery}
                        </ProductDeliveryTime>
                    </ProductInfo>
                </ProductCard>
            </Item>
        </Container>
    );
};

export default Remedy;
