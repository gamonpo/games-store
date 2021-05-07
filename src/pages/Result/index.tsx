import React, { useState } from 'react';

import CheckBox from '@react-native-community/checkbox';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import { ScrollView, ScrollViewComponent, View } from 'react-native';

import {
    Container,
    Header,
    HeaderTitle,
    SubHeader,
    SubTitle,
    IconComponent,
    IconSearch,
    OrderList,
    OrderTitle,
    IconCaret,
    IconCart,
    List,
    Item,
    ProductCard,
    ProductInfo,
    ProductImage,
    ProductPrice,
    ProductTrademark,
    CheckboxLabel,
    ProductCheckbox,
    ProductDeliveryTime,
    ProductDetails,
    ProductDetailsTitle,
    ProductDetailsIcon,
    EnterButton,
    EnterTitle,
    CartIcon,
    ListHeader,
    IconCaretDown,
    IconCaretUp,
    Elipse,
    LoadMore,
    LoadMoreTitle,
    ProductDetailsButton,
} from './styles';

import one from '../../assets/items/numberOne.png';
import two from '../../assets/items/numberTwo.png';
import three from '../../assets/items/numberThree.png';
import arrow from '../../assets/arrow.png';
import colors from '../../style/colors';

interface Data {
    id: string;
    img: string;
    trademark: string;
    price: string;
    delivery: string;
}

const Result = () => {
    const [data, setData] = useState<Data[]>([
        {
            id: '1',
            img: one,
            trademark: 'Eurofarma',
            price: '34,90',
            delivery: '2 dia para entrega',
        },
        {
            id: '2',
            img: two,
            trademark: 'Medley',
            price: '31,90',
            delivery: '2 dia para entrega',
        },
        {
            id: '3',
            img: three,
            trademark: 'Geolab',
            price: '32,90',
            delivery: '2 dia para entrega',
        },
        {
            id: '4',
            img: two,
            trademark: 'Medley',
            price: '31,9',
            delivery: '2 dia para entrega',
        },
        {
            id: '5',
            img: three,
            trademark: 'Geolab',
            price: '32,9',
            delivery: '2 dia para entrega',
        },
        {
            id: '6',
            img: three,
            trademark: 'Geolab',
            price: '32,9',
            delivery: '2 dia para entrega',
        },
        {
            id: '7',
            img: three,
            trademark: 'Geolab',
            price: '32,9',
            delivery: '2 dia para entrega',
        },
        {
            id: '8',
            img: three,
            trademark: 'Geolab',
            price: '32,9',
            delivery: '2 dia para entrega',
        },
    ]);
    const [order, setOrder] = useState<string>('');

    const checkbox = true;

    const renderItem = ({ item }) => (
        <Item>
            <ProductCard>
                <ProductImage source={item.img} />

                <ProductInfo>
                    <ProductPrice>R$ {item.price}</ProductPrice>

                    <ProductCheckbox>
                        <CheckBox
                            disabled
                            value={checkbox}
                            tintColors={{ true: '#1B9F18' }}
                        />

                        <CheckboxLabel>Genérico</CheckboxLabel>
                    </ProductCheckbox>

                    <ProductTrademark>{item.trademark}</ProductTrademark>

                    <ProductDeliveryTime>{item.delivery}</ProductDeliveryTime>

                    <ProductDetails>
                        <ProductDetailsButton>
                            <ProductDetailsTitle>Detalhes</ProductDetailsTitle>

                            <ProductDetailsIcon source={arrow} />
                        </ProductDetailsButton>

                        <CartIcon>
                            <Ionicons
                                name="cart-outline"
                                size={25}
                                color="white"
                            />
                        </CartIcon>
                    </ProductDetails>
                </ProductInfo>

                {/* <CartIcon>
                    <Ionicons name="cart-outline" size={25} color="white" />
                </CartIcon> */}
            </ProductCard>
        </Item>
    );

    if (order === 'ascend') {
        data.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10));
    }
    if (order === 'descend') {
        data.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10));
    }
    return (
        <Container>
            <Header>
                <HeaderTitle>Farmcare</HeaderTitle>

                <SubHeader>
                    <Elipse />
                    <SubTitle>Resultados</SubTitle>

                    <IconComponent>
                        <IconSearch />
                    </IconComponent>
                </SubHeader>

                <ListHeader>
                    <OrderList>
                        <OrderTitle>Ordenar</OrderTitle>

                        <IconCaret>
                            <IconCaretUp onPress={() => setOrder('ascend')}>
                                <AntDesign
                                    name="caretup"
                                    size={24}
                                    color={colors.color_font}
                                />
                            </IconCaretUp>

                            <IconCaretDown onPress={() => setOrder('descend')}>
                                <AntDesign
                                    name="caretdown"
                                    size={24}
                                    color={colors.color_font}
                                />
                            </IconCaretDown>
                        </IconCaret>
                    </OrderList>
                    <IconCart>
                        <Ionicons
                            name="cart-outline"
                            size={32}
                            color={colors.color_two}
                        />
                    </IconCart>
                </ListHeader>
            </Header>

            <List
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <>
                        <LoadMore>
                            <LoadMoreTitle>Carregar mais</LoadMoreTitle>
                            <AntDesign
                                name="caretdown"
                                size={30}
                                color={colors.color_five}
                            />
                        </LoadMore>
                        <EnterButton>
                            <EnterTitle>Pagamento</EnterTitle>
                        </EnterButton>
                    </>
                }
            />
        </Container>
    );
};

export default Result;
