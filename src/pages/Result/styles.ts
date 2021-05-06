import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
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
    /* height: 50px; */
    flex-direction: row;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
`;

export const OrderList = styled.View`
    width: 126px;
    height: 44.63px;
    flex-direction: row;
    border: 1px solid ${colors.color_border};
    border-radius: 15px;
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
    top: 2px;
`;

export const IconCaretDown = styled.TouchableOpacity``;

export const IconCart = styled.View`
    width: 32px;
    height: 32px;
`;

export const List = styled.FlatList`
    align-self: center;
`;

export const Item = styled.View`
    margin: 20px;
    background-color: ${colors.color_item};
    width: 300px;
    height: 200px;
    border-radius: 5px;
    elevation: 20;
    justify-content: center;
`;

export const ProductCard = styled.View`
    flex-direction: row;
`;

export const ProductInfo = styled.View`
    flex-direction: column;
    padding: 10px;
`;

export const ProductImage = styled.Image`
    width: 100px;
`;

export const ProductPrice = styled.Text`
    font-size: ${`${0.05 * width}px`};
    color: ${colors.color_five};
    font-family: 'sora-regular';
`;

export const ProductCheckbox = styled.View`
    flex-direction: row;
    right: 50px;
    height: 30px;
    justify-content: center;
`;

export const CheckboxLabel = styled.Text`
    font-size: ${`${0.03 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-thin';
    top: 5px;
`;

export const CartIcon = styled.TouchableOpacity`
    width: 38px;
    height: 38px;
    right: 80px;
    top: 100px;
    background-color: ${colors.color_two};
    justify-content: center;
    align-items: center;
`;

export const ProductTrademark = styled.Text`
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-regular';
`;

export const ProductDeliveryTime = styled.Text`
    top: 10px;
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-thin';
`;

export const ProductDetails = styled.TouchableOpacity`
    top: 20px;
    flex-direction: row;
    align-items: center;
`;

export const ProductDetailsTitle = styled.Text`
    font-size: ${`${0.05 * width}px`};
    color: ${colors.color_five};
    font-family: 'sora-regular';
`;

export const ProductDetailsIcon = styled.Image`
    width: 10px;
    top: 4px;
    left: 10px;
`;

export const EnterButton = styled.TouchableOpacity`
    margin-top: 50px;
    margin-bottom: 5px;
    width: 225px;
    height: 65px;
    border-radius: 30px;
    background-color: ${colors.color_four};
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const EnterTitle = styled.Text`
    font-size: ${`${0.08 * width}px`};
    color: ${colors.color_three};
    font-family: 'sora-regular';
`;
