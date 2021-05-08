import React, { useEffect, useState } from 'react';

import CheckBox from '@react-native-community/checkbox';

import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

import { Modal } from 'react-native';

import { BlurView } from 'expo-blur';

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
    ModalView,
    ModalButton,
    ModalButtonTitle,
    ModalDecisionButton,
    ModalDecisionButtonTitle,
    ModalDecisionView,
    ModalIconView,
    IconCartBadge,
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
    const [modalVisible, setModalVisible] = useState(false);
    const [selecteditem, setSelecteditem] = useState<Data>({
        delivery: '',
        id: '',
        img: '',
        price: '',
        trademark: '',
    });
    const [cart, setCart] = useState<Data[]>([]);
    const [order, setOrder] = useState<string>('');

    const checkbox = true;

    const [badge, setBadge] = useState<number>();

    const openModal = (item: Data) => {
        setSelecteditem(item);
        setModalVisible(!modalVisible);
    };

    const addProduct = (item: Data) => {
        setCart(state => [...state, item]);
        setModalVisible(!modalVisible);
    };

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

                        <CartIcon onPress={() => openModal(item)}>
                            <Ionicons
                                name="cart-outline"
                                size={25}
                                color="white"
                            />
                        </CartIcon>
                    </ProductDetails>
                </ProductInfo>
            </ProductCard>
        </Item>
    );

    useEffect(() => {
        if (cart.length > 0) {
            setBadge(cart.length);
        }
    }, [cart]);

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
                        <IconCartBadge>{badge}</IconCartBadge>
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

            <Modal transparent animationType="slide" visible={modalVisible}>
                <BlurView
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    tint="dark"
                >
                    <ModalIconView
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Feather name="x" size={60} color="black" />
                    </ModalIconView>
                    <ModalView>
                        <ProductImage source={selecteditem.img} />

                        <ProductInfo style={{ left: 50, width: 300 }}>
                            <ProductPrice>R$ {selecteditem.price}</ProductPrice>

                            <ProductTrademark style={{ bottom: 0 }}>
                                {selecteditem.trademark}
                            </ProductTrademark>

                            <ProductCheckbox
                                style={{ bottom: 0, left: 7, width: 60 }}
                            >
                                <CheckBox
                                    disabled
                                    value={checkbox}
                                    tintColors={{ true: '#1B9F18' }}
                                />

                                <CheckboxLabel>Genérico</CheckboxLabel>
                            </ProductCheckbox>

                            <ProductDeliveryTime style={{ bottom: 0 }}>
                                {selecteditem.delivery}
                            </ProductDeliveryTime>

                            <ProductDetails>
                                <ProductDetailsButton style={{ flexGrow: 0 }}>
                                    <ProductDetailsTitle>
                                        Detalhes
                                    </ProductDetailsTitle>

                                    <ProductDetailsIcon source={arrow} />
                                </ProductDetailsButton>
                            </ProductDetails>
                        </ProductInfo>
                    </ModalView>

                    <ModalButton>
                        <Ionicons name="cart-outline" size={45} color="white" />
                        <ModalButtonTitle>Adicionar ?</ModalButtonTitle>
                    </ModalButton>

                    <ModalDecisionView>
                        <ModalDecisionButton
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <ModalDecisionButtonTitle>
                                Não
                            </ModalDecisionButtonTitle>
                        </ModalDecisionButton>

                        <ModalDecisionButton
                            onPress={() => addProduct(selecteditem)}
                        >
                            <ModalDecisionButtonTitle>
                                Sim
                            </ModalDecisionButtonTitle>
                        </ModalDecisionButton>
                    </ModalDecisionView>
                </BlurView>
            </Modal>
        </Container>
    );
};

export default Result;
