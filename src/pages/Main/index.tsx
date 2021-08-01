import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { ImageSourcePropType, Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import { Picker } from '@react-native-picker/picker';

import {
    Container,
    Header,
    Avatar,
    Image,
    TextView,
    TextGreetings,
    TextName,
    TextTitle,
    Item,
    ModalCard,
    Close,
    ModalImage,
    ModalTitle,
    ModalDescription,
    Add,
    Icon,
    ProductImage,
    ListLastReleases,
    ListRecommended,
    ItemRecommended,
    PostRecommended,
} from './styles';

import post_one from '../../assets/posts/p1.png';
import post_two from '../../assets/posts/p2.png';
import post_three from '../../assets/posts/p3.png';
import post_four from '../../assets/posts/p4.png';

import { Data, useCart } from '../../hooks/Cart';

export interface Recommended {
    id: string;
    name: string;
    image: ImageSourcePropType;
}

const Main = () => {
    const [data, setData] = useState([
        {
            id: String(uuid.v4()),
            name: 'Horizon Zero Dawn',
            image: require('../../assets/games/horizon-zero-dawn.png'),
            price: '115.8',
            unit: 1,
            score: 290,
        },
        {
            id: String(uuid.v4()),
            name: 'Call of Duty Infinite Warfare',
            image: require('../../assets/games/call-of-duty-infinite-warfare.png'),
            price: '49.99',
            unit: 1,
            score: 80,
        },
        {
            id: String(uuid.v4()),
            name: 'Call of Duty WWII',
            image: require('../../assets/games/call-of-duty-wwii.png'),
            price: '249.99',
            unit: 1,
            score: 205,
        },
        {
            id: String(uuid.v4()),
            name: 'Fifa 18',
            image: require('../../assets/games/fifa-18.png'),
            price: '195.39',
            unit: 1,
            score: 325,
        },
        {
            id: String(uuid.v4()),
            name: 'Super Mario Odyssey',
            image: require('../../assets/games/super-mario-odyssey.png'),
            price: '197.88',
            unit: 1,
            score: 100,
        },
        {
            id: String(uuid.v4()),
            name: 'Shadow of Mordor',
            image: require('../../assets/games/terra-media-sombras-de-mordor.png'),
            price: '79.99',
            unit: 1,
            score: 50,
        },
        {
            id: String(uuid.v4()),
            name: 'Shards of darkness',
            image: require('../../assets/games/shards-of-darkness.png'),
            price: ' 71.94',
            unit: 1,
            score: 400,
        },
        {
            id: String(uuid.v4()),
            name: 'Mortal Kombat XL',
            image: require('../../assets/games/mortal-kombat-xl.png'),
            price: ' 69.99',
            unit: 1,
            score: 150,
        },
        {
            id: String(uuid.v4()),
            name: 'The Witcher III Wild Hunt',
            image: require('../../assets/games/the-witcher-iii-wild-hunt.png'),
            price: ' 119.5',
            unit: 1,
            score: 250,
        },
    ]);
    const [type, setType] = useState<string>('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selecteditem, setSelecteditem] = useState<Data>({});

    const recommended: Recommended[] = [
        {
            id: String(uuid.v4()),
            name: 'Exclusivos',
            image: post_one,
        },
        {
            id: String(uuid.v4()),
            name: 'Classicos',
            image: post_two,
        },
        {
            id: String(uuid.v4()),
            name: 'DayOff',
            image: post_three,
        },
        {
            id: String(uuid.v4()),
            name: 'Bruxas',
            image: post_four,
        },
    ];

    const { cart, setCart } = useCart();

    const openModal = (item: Data) => {
        setSelecteditem(item);
        setModalVisible(!modalVisible);
    };

    const addProduct = (item: Data) => {
        const exist = cart.find((element: Data) => element.name === item.name);

        if (exist) {
            exist.unit += 1;
            const newCart = cart.filter(
                (element: Data) => element.name !== item.name,
            );

            newCart.push(exist);

            setCart(newCart);
            setModalVisible(!modalVisible);
        } else {
            setCart((state: Data[]) => [...state, item]);
            setModalVisible(!modalVisible);
        }
    };

    switch (type) {
        case 'descend':
            data.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10));
            break;
        case 'ascend':
            data.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10));

            break;

        case 'score':
            data.sort((a, b) => b.score - a.score);
            break;

        case 'alphabetic':
            data.sort((a, b) => a.name > b.name);

            break;

        default:
    }

    return (
        <Container>
            <Header>
                <Avatar>
                    <Image />
                </Avatar>

                <TextView>
                    <TextGreetings>Bem vindo,</TextGreetings>
                    <TextName>Gabriel Monteiro</TextName>
                </TextView>
            </Header>

            <TextTitle>Últimos lançamentos</TextTitle>

            <Picker
                style={{
                    width: 200,
                    height: 40,
                }}
                mode="dropdown"
                selectedValue={type}
                onValueChange={itemType => setType(String(itemType))}
            >
                <Picker.Item label="" value="" />
                <Picker.Item label="Preço: maior" value="descend" />
                <Picker.Item label="Preço: menor" value="ascend" />
                <Picker.Item label="Popularidade" value="score" />
                <Picker.Item label="Alfabética" value="alphabetic" />
            </Picker>

            <ListLastReleases>
                {data.map(item => (
                    <Item key={item.id} onPress={() => openModal(item)}>
                        <ProductImage source={item.image} />
                    </Item>
                ))}
            </ListLastReleases>

            <Modal transparent visible={modalVisible}>
                <BlurView
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    tint="dark"
                >
                    <ModalCard>
                        <Close onPress={() => setModalVisible(false)}>
                            <Icon name="x" />
                        </Close>
                        <ModalTitle>{selecteditem.name}</ModalTitle>
                        <ModalImage source={selecteditem.image} />
                        <ModalDescription>
                            R$: {selecteditem.price}
                        </ModalDescription>
                        <Add onPress={() => addProduct(selecteditem)}>
                            <Icon name="plus" />
                        </Add>
                    </ModalCard>
                </BlurView>
            </Modal>

            <TextTitle>Recomendados</TextTitle>

            <ListRecommended>
                {recommended.map(item => (
                    <ItemRecommended key={item.id}>
                        <PostRecommended source={item.image} />
                    </ItemRecommended>
                ))}
            </ListRecommended>
        </Container>
    );
};

export default Main;
