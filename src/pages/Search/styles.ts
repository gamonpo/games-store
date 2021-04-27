import styled from 'styled-components/native';

import colors from '../../style/colors';

import img from '../../assets/background_two.png';

export const Container = styled.ImageBackground.attrs({
    source: img,
})`
    flex: 1;
    align-items: center;
    background-color: ${colors.color_three};
`;
