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
