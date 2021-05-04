import React, { useState } from 'react';

import {
    Container,
    Header,
    HeaderTitle,
    SubHeader,
    SubTitle,
    IconComponent,
    IconImage,
    List,
    Item,
    ComponentOne,
    ProductInfo,
    ProductImage,
    ProductPrice,
    ProductTrademark,
    ProductDeliveryTime,
    ProductDetails,
    ProductDetailsTitle,
    ProductDetailsIcon,
    EnterButton,
    EnterTitle,
} from './styles';

import one from '../../assets/items/numberOne.png';
import two from '../../assets/items/numberTwo.png';
import three from '../../assets/items/numberThree.png';
import arrow from '../../assets/arrow.png';

interface Data {
    id: string;
    img: string;
    trademark: string;
    price: number;
    delivery: string;
}

const Result = () => {
    const [data, setData] = useState<Data[]>([
        {
            id: '1',
            img: one,
            trademark: 'Eurofarma',
            price: 34.9,
            delivery: '2 dia para entrega',
        },
        {
            id: '2',
            img: two,
            trademark: 'Medley',
            price: 34.9,
            delivery: '2 dia para entrega',
        },
        {
            id: '3',
            img: three,
            trademark: 'Geolab',
            price: 34.9,
            delivery: '2 dia para entrega',
        },
        {
            id: '4',
            img: two,
            trademark: 'Medley',
            price: 34.9,
            delivery: '2 dia para entrega',
        },
        {
            id: '5',
            img: three,
            trademark: 'Geolab',
            price: 34.9,
            delivery: '2 dia para entrega',
        },
    ]);

    const renderItem = ({ item }) => (
        <Item>
            <ComponentOne>
                <ProductImage source={item.img} />
                <ProductInfo>
                    <ProductPrice>R$ {item.price}</ProductPrice>

                    <ProductTrademark>{item.trademark}</ProductTrademark>

                    <ProductDeliveryTime>{item.delivery}</ProductDeliveryTime>

                    <ProductDetails>
                        <ProductDetailsTitle>Detalhes</ProductDetailsTitle>

                        <ProductDetailsIcon source={arrow} />
                    </ProductDetails>
                </ProductInfo>
            </ComponentOne>
        </Item>
    );

    return (
        <Container>
            <Header>
                <HeaderTitle>Farmcare</HeaderTitle>

                <SubHeader>
                    <SubTitle>Resultados</SubTitle>

                    <IconComponent>
                        <IconImage />
                    </IconComponent>
                </SubHeader>
            </Header>

            <List
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
            <EnterButton>
                <EnterTitle>Pagamento</EnterTitle>
            </EnterButton>
        </Container>
    );
};

export default Result;
