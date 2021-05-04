import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import colors from '../../style/colors';

import img from '../../assets/background_two.png';
import search from '../../assets/search_blue.png';

const { width } = Dimensions.get('window');

export const Container = styled.ImageBackground.attrs({
    source: img,
})`
    flex: 1;
    background-color: ${colors.color_three};
`;

export const Header = styled.View`
    margin-top: ${`${2 * Constants.statusBarHeight}px`};
    margin-bottom: ${`${2 * Constants.statusBarHeight}px`};
    /* flex: 0.4; */
    padding: 15px;
`;

export const HeaderTitle = styled.Text`
    font-size: ${`${0.1 * width}px`};
    font-family: 'NothingYouCouldDo_400Regular';
    color: ${colors.color_five};
    margin-bottom: 50px;
`;

export const SubHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SubTitle = styled.Text`
    font-size: ${`${0.06 * width}px`};
    font-family: 'sora-regular';
    color: ${colors.color_font};
`;

export const IconComponent = styled.TouchableOpacity`
    border-radius: 30px;
    justify-content: center;
`;

export const IconImage = styled.Image.attrs({
    source: search,
})`
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

export const ComponentOne = styled.View`
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
