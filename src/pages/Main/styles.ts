import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

import img from '../../assets/profile/photo.jpg';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary_white};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(25)}px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
`;

export const Avatar = styled.View``;

export const Image = styled.Image.attrs({
    source: img,
})`
    width: ${RFValue(68)}px;
    height: ${RFValue(68)}px;

    border-radius: 68px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.secondary_green};
`;

export const TextView = styled.View`
    flex-direction: column;
    right: ${RFValue(50)}px;
`;

export const TextGreetings = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.secondary_gray};
`;

export const TextName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
`;

export const TextTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(24)}px;
    padding: ${RFValue(24)}px;
`;

export const ListLastReleases = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    flex-direction: row;
    margin: 5px;
`;

export const Item = styled.TouchableOpacity``;

export const ModalCard = styled.View`
    width: ${RFValue(255)}px;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary_white};
`;

export const Close = styled.TouchableOpacity`
    align-self: flex-end;
    margin: 5px;
`;

export const ModalImage = styled.Image`
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const ModalTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
`;

export const ModalDescription = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
`;

export const Add = styled.TouchableOpacity`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;

    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;

    background-color: ${({ theme }) => theme.colors.secondary_green};
`;

export const Icon = styled(Feather)`
    color: ${({ theme, name }) =>
        name === 'x' ? theme.colors.secondary_gray : theme.colors.primary_dark};
    font-size: ${RFValue(24)}px;
`;

export const ProductImage = styled.Image`
    width: ${RFValue(101)}px;
    height: ${RFValue(105)}px;
    border-radius: 16px;
`;

export const ProductPrice = styled.Text``;

export const ListRecommended = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    align-self: center;
    margin: 5px;
`;

export const ItemRecommended = styled.View`
    margin-bottom: 20px;
`;

export const PostRecommended = styled.Image``;
