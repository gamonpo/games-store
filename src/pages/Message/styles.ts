/* eslint-disable prettier/prettier */
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
    background-color: ${colors.color_three};
`;

export const Header = styled.View`
    margin-top: ${`${3 * Constants.statusBarHeight}px`};
    margin-bottom: ${`${2 * Constants.statusBarHeight}px`};
    flex: 0.4;
    padding-left: 15px;
`;

export const HeaderTitle = styled.Text`
    font-size: ${`${0.1 * width}px`};
    font-family: 'NothingYouCouldDo_400Regular';
    color: ${colors.color_five};
`;

export const SubHeader = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MessageView = styled.View`
    margin: 20px;
`;

export const MessageText = styled.Text`
    text-align: center;
    font-size: ${`${0.05 * width}px`};
    font-family: 'sora-bold';
    color: ${colors.color_five};
`;

export const EnterButton = styled.TouchableOpacity`
    margin-top: 50px;
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
