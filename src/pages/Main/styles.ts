import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

import img from '../../assets/background_two.png';

import colors from '../../style/colors';

const { width } = Dimensions.get('window');

export const Container = styled.ImageBackground.attrs({
    source: img,
})`
    flex: 1;
    padding-left: 15px;
    background-color: ${colors.color_three};
`;

export const Header = styled.View`
    margin-top: ${`${3 * Constants.statusBarHeight}px`};
    margin-bottom: ${`${2 * Constants.statusBarHeight}px`};
    flex: 0.4;
`;

export const HeaderTitle = styled.Text`
    font-size: ${`${0.1 * width}px`};
    font-family: 'NothingYouCouldDo_400Regular';
    color: ${colors.color_five};
`;

export const SubHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SubTitle = styled.Text`
    font-size: ${`${0.1 * width}px`};
    font-family: 'sora-thin';
    color: ${colors.color_five};
`;
