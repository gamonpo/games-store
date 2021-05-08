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
    width: 100%;
    left: 2px;
`;

export const ProductImage = styled.Image``;

export const ProductPrice = styled.Text`
    font-size: ${`${0.05 * width}px`};
    color: ${colors.color_five};
    font-family: 'sora-regular';
`;

export const ProductTrademark = styled.Text`
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-regular';
`;

export const ProductDeliveryTime = styled.Text`
    font-size: ${`${0.04 * width}px`};
    color: ${colors.color_font};
    font-family: 'sora-thin';
`;
