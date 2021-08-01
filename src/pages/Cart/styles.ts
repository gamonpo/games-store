import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
    name: string;
}

export const Container = styled.ScrollView`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.primary_white};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(20)}px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
`;

export const Item = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`;

export const ProductImage = styled.Image`
    width: ${RFPercentage(20)}px;
    height: ${RFPercentage(20)}px;
`;

export const Info = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    padding: 12px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    padding: 5px;
`;

export const Unit = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    padding: 5px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    margin: 5px;

    border-radius: 25px;

    background-color: ${({ theme, name }) =>
        name === 'minus'
            ? theme.colors.secondary_red
            : theme.colors.secondary_green};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.primary_white};
    font-size: ${RFValue(24)}px;
`;
