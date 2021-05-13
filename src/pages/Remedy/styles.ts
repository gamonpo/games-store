import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../style/colors';

import img from '../../assets/background_two.png';

const { width } = Dimensions.get('window');

export const Container = styled.ImageBackground.attrs({
    source: img,
})`
    flex: 1;
    background-color: ${colors.color_three};
`;

export const Header = styled.View`
    padding-top: ${`${2 * Constants.statusBarHeight}px`};
    background-color: ${colors.color_three};
`;

export const HeaderTitle = styled.Text`
    font-size: ${`${0.1 * width}px`};
    font-family: 'NothingYouCouldDo_400Regular';
    color: ${colors.color_five};
    margin-bottom: 50px;
    left: ${`${0.05 * width}px`};
`;

export const NoItems = styled.View`
    padding-top: ${`${4 * Constants.statusBarHeight}px`};
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const NoItemsTitle = styled.Text`
    font-size: ${`${0.1 * width}px`};
    color: ${colors.color_five};
    font-family: 'sora-regular';
`;

export const Item = styled.View`
    margin-top: ${`${hp('5%')}px`};
    width: ${`${wp('90%')}px`};
    height: ${`${hp('30%')}px`};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const ProductCard = styled.View`
    flex-direction: row;
    width: ${`${wp('80%')}px`};
`;

export const ProductInfo = styled.View`
    flex-direction: column;
    margin-left: 30px;
    padding: 5px;
`;

export const ProductImage = styled.Image``;

export const ProductTrademark = styled.Text`
    font-size: ${`${0.05 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-extralight';
`;

export const ProductPrice = styled.Text`
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_two};
    font-family: 'sora-regular';
    top: 10px;
`;

export const ProductDeliveryTime = styled.Text`
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-thin';
    top: 20px;
`;

export const CartBar = styled.View`
    top: 30px;
    flex-direction: row;
    align-items: center;
`;

export const CartIcon = styled.TouchableOpacity`
    width: ${`${wp('8%')}px`};
    height: ${`${hp('5%')}px`};
    background-color: ${colors.color_five};
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`;

export const QuantityView = styled.View`
    flex-direction: row;
    width: ${`${wp('22%')}px`};
    background-color: ${colors.color_two};
    height: ${`${hp('5%')}px`};
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    elevation: 5;
`;

export const IncreaseQuantity = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

export const DecreaseQuantity = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

export const QuantityTitle = styled.Text`
    font-size: ${`${0.06 * width}px`};
    color: ${colors.color_three};
    font-family: 'sora-regular';
    flex-grow: 4;
`;

export const List = styled.FlatList`
    align-self: center;
`;

export const MiniCard = styled.View`
    margin-bottom: 10px;
    width: ${`${wp('24%')}px`};
    height: ${`${wp('15%')}px`};

    align-self: center;
    justify-content: flex-end;
    align-items: flex-end;

    background-color: ${colors.color_mini_card};
    border-radius: 3px;
    elevation: 5;
    border: 0.29px solid ${colors.color_mini_card_border};
`;

export const MiniCardText = styled.Text`
    font-size: ${`${0.02 * width}px`};
    color: ${colors.color_font};
    font-family: 'rajdhani-light';
    padding-right: 2px;
    padding-bottom: 5px;
`;

export const EnterButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    align-self: center;
    border-bottom-width: 1px;
`;

export const EnterTitle = styled.Text`
    font-size: ${`${0.06 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-extralight';
    top: 3px;
`;

export const ModalView = styled.View`
    margin-top: ${`${2 * Constants.statusBarHeight}px`};
    width: 100%;
    height: 100%;

    background-color: rgba(55, 168, 232, 0.7);

    align-items: center;
`;

export const Info = styled.View`
    align-items: center;
    margin-top: 40px;
`;

export const Title = styled.Text`
    font-size: ${`${0.05 * width}px`};
    font-family: 'sora-regular';
    color: ${colors.color_three};
`;

export const PriceInfo = styled.View`
    flex-direction: row;
`;

export const PriceLabel = styled.Text`
    font-size: ${`${0.06 * width}px`};
    font-family: 'sora-regular';
    color: ${colors.color_three};
`;

export const Price = styled.Text`
    font-size: ${`${0.06 * width}px`};
    font-family: 'sora-bold';
    color: ${colors.color_three};
`;

export const Card = styled.View`
    width: 280px;
    height: 181px;

    margin-top: 20px;

    justify-content: center;

    background-color: ${colors.color_five};
    border-radius: 5px;
    elevation: 5;
    border: 0.5px solid ${colors.color_mini_card_border};
`;

export const CardInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const NameLabel = styled.Text`
    font-size: ${`${0.04 * width}px`};
    font-family: 'ocrastd-regular';
    color: ${colors.color_three};

    left: 20px;
    bottom: 30px;
`;

export const SecurityCode = styled.Text`
    font-size: ${`${0.04 * width}px`};
    font-family: 'ocrastd-regular';
    color: ${colors.color_three};

    right: 20px;
`;

export const ValidationExpire = styled.Text`
    font-size: ${`${0.04 * width}px`};
    font-family: 'ocrastd-regular';
    color: ${colors.color_three};

    left: 20px;
`;

export const Number = styled.Text`
    font-size: ${`${0.04 * width}px`};
    font-family: 'ocrastd-regular';
    color: ${colors.color_three};

    text-align: center;
    top: 50px;
`;

export const ModalButton = styled.TouchableOpacity`
    width: ${`${0.4 * width}px`};
    height: ${`${0.13 * width}px`};

    margin: 10px;
    top: 30px;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    background-color: ${colors.color_two};
`;

export const ModalButtonTitle = styled.Text`
    font-size: ${`${0.05 * width}px`};
    color: ${colors.color_three};
    font-family: 'sora-regular';
`;
