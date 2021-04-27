import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import colors from '../../style/colors';

import img from '../../assets/background_two.png';

const { width } = Dimensions.get('window');

export const Container = styled.ImageBackground.attrs({
    source: img,
})`
    flex: 1;
    align-items: center;
    background-color: ${colors.color_three};
`;

export const LHeader = styled.View`
    margin-top: ${`${4 * Constants.statusBarHeight}px`};
    align-items: center;
    flex: 0.4;
`;

export const LHeaderTitle = styled.Text`
    font-size: ${`${0.1 * width}px`};
    font-family: 'NothingYouCouldDo_400Regular';
    color: ${colors.color_five};
`;

export const DataGrid = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Component = styled.View`
    align-items: center;
    margin: 10px;
`;

export const Label = styled.Text`
    font-size: ${`${0.06 * width}px`};
    font-family: 'sora-thin';
    color: ${colors.color_font};
`;

export const Input = styled.TextInput`
    width: 250px;
    height: 30px;
    background-color: ${colors.color_input};
    border-bottom-width: 1px;
    border-bottom-color: ${colors.color_five};
    margin: 5px;
`;

export const EnterButton = styled.TouchableOpacity`
    margin-top: 50px;
    width: 225px;
    height: 65px;
    border-radius: 30px;
    background-color: ${colors.color_four};
    align-items: center;
    justify-content: center;
    elevation: 20;
`;

export const EnterTitle = styled.Text`
    font-size: ${`${0.08 * width}px`};
    color: ${colors.color_three};
    font-family: 'sora-regular';
`;
