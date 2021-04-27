import styled from 'styled-components/native';
import Constants  from 'expo-constants';
import { Dimensions } from 'react-native';

import img from '../../assets/background.png';

import colors from '../../style/colors'

const { width } = Dimensions.get('window')

export const Container = styled.ImageBackground.attrs({
  source: img,
})`
    flex: 1;
    align-items: center;
`;

export const LHeader = styled.View`
    margin-top: ${3.5 * Constants.statusBarHeight + 'px'};
    align-items: center;
    flex-grow: 0.2;
`;

export const LHeaderTitle = styled.Text`
    font-size: ${0.1 * width + 'px'};
    font-family: 'NothingYouCouldDo_400Regular';
    color: ${colors.color_three};
`;

export const LButton = styled.TouchableOpacity`
    flex-grow: 0;
    width: 226px;
    height: 66.96px;
    border-radius: 30px;
    background-color: ${colors.color_two};
    align-items: center;
    justify-content: center;
`;

export const LTitle = styled.Text`
    font-size: 36px;
    color: #ffffff;
`;

export const CButton = styled.TouchableOpacity`
    flex-grow: 0;
    width: 226px;
    height: 66.96px;
    border-radius: 30px;
    background-color: ${colors.color_two};
    align-items: center;
    justify-content: center;
`;

