import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../style/colors';

import img from '../../assets/background_two.png';
import elipse from '../../assets/elipse.png';
import search from '../../assets/search_blue.png';

const { width } = Dimensions.get('window');

export const Container = styled.ImageBackground.attrs({
    source: img,
})`
    flex: 1;
    background-color: ${colors.color_three};
`;

export const Header = styled.View`
    padding-top: ${`${2 * Constants.statusBarHeight}px`};
    elevation: 0.9;
    background-color: ${colors.color_three};
`;

export const HeaderTitle = styled.Text`
    font-size: ${`${0.1 * width}px`};
    font-family: 'NothingYouCouldDo_400Regular';
    color: ${colors.color_five};
    margin-bottom: 50px;
    left: ${`${0.05 * width}px`};
`;

export const SubHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Elipse = styled.ImageBackground.attrs({
    source: elipse,
})`
    width: 50px;
    height: 69px;
    flex-grow: 0;
`;

export const SubTitle = styled.Text`
    font-size: ${`${0.06 * width}px`};
    font-family: 'sora-regular';
    color: ${colors.color_font};
    right: 25px;
    flex-grow: 1;
`;

export const IconComponent = styled.TouchableOpacity`
    border-radius: 30px;
    justify-content: center;
    bottom: 15px;
    flex-grow: 0.1;
`;

export const IconSearch = styled.Image.attrs({
    source: search,
})`
    width: 32px;
    height: 32px;
`;

export const ListHeader = styled.View`
    flex-direction: row;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
`;

export const OrderList = styled.View`
    width: 136px;
    height: 50px;
    flex-direction: row;
    border: 1px solid ${colors.color_border};
    border-radius: 23px;
    justify-content: center;
`;

export const OrderTitle = styled.Text`
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-extralight';
    right: 10px;
    top: 7px;
`;

export const IconCaret = styled.View`
    flex-direction: column;
    justify-content: center;
`;

export const IconCaretUp = styled.TouchableOpacity`
    left: 5px;
    top: 4px;
`;

export const IconCaretDown = styled.TouchableOpacity`
    bottom: 4px;
`;

export const IconCart = styled.View`
    width: 32px;
    height: 32px;
`;

export const List = styled.FlatList`
    align-self: center;
`;

export const Item = styled.View`
    margin-top: ${`${hp('5%')}px`};
    background-color: ${colors.color_item};
    width: ${`${wp('90%')}px`};
    height: ${`${hp('30%')}px`};
    border-radius: 5px;
    elevation: 5;
    justify-content: center;
    align-items: center;
`;

export const ProductCard = styled.View`
    flex-direction: row;
    width: ${`${wp('80%')}px`};
`;

export const ProductInfo = styled.View`
    flex-direction: column;
    width: 100%;
    left: 2px;
`;

export const ProductImage = styled.Image``;

export const ProductPrice = styled.Text`
    font-size: ${`${0.05 * width}px`};
    color: ${colors.color_five};
    font-family: 'sora-regular';
`;

export const ProductCheckbox = styled.View`
    flex-direction: row;
    justify-content: center;
    bottom: 30px;
`;

export const CheckboxLabel = styled.Text`
    font-size: ${`${0.03 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-thin';
    top: 5px;
`;

export const ProductTrademark = styled.Text`
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-regular';
    bottom: 30px;
`;

export const ProductDeliveryTime = styled.Text`
    bottom: 20px;
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-thin';
`;

export const ProductDetails = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ProductDetailsButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    flex-grow: 0.63;
`;

export const ProductDetailsTitle = styled.Text`
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_five};
    font-family: 'sora-regular';
`;

export const ProductDetailsIcon = styled.Image`
    width: 10px;
    top: 4px;
    left: 10px;
`;

export const CartIcon = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    flex-grow: 0;
    background-color: ${colors.color_two};
    justify-content: center;
    align-items: center;
`;

export const LoadMore = styled.TouchableOpacity`
    margin: 20px;
    height: 30px;
    align-items: center;
    align-self: center;
    border-bottom-width: 1px;
    flex-direction: column;
`;

export const LoadMoreTitle = styled.Text`
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-extralight';
    top: 6px;
    padding-bottom: 5px;
`;

export const EnterButton = styled.TouchableOpacity`
    margin: 20px;
    width: 245px;
    height: 61px;
    border-radius: 5px;
    background-color: ${colors.color_four};
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const EnterTitle = styled.Text`
    font-size: ${`${0.06 * width}px`};
    color: ${colors.color_three};
    font-family: 'sora-regular';
`;
