import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';

import {
    Container,
    Header,
    HeaderTitle,
    DataGrid,
    Component,
    Label,
    Input,
    EnterButton,
    EnterTitle,
    IconComponent,
    IconImage,
} from './styles';

interface Marca {
    name: string;
}

const Search: React.FC = () => {
    const navigation = useNavigation();

    const [checkbox, setCheckbox] = useState<boolean>();
    const [marca, setMarca] = useState<Marca>();

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header>
                    <HeaderTitle>Farmacare</HeaderTitle>
                </Header>

                <DataGrid>
                    <Component>
                        <Label>Medicamento</Label>

                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                        />
                    </Component>

                    <Component>
                        <Label>Marca</Label>

                        <Picker
                            style={{
                                width: 200,
                                height: 40,
                            }}
                            mode="dropdown"
                            selectedValue={marca}
                            onValueChange={(itemMarca, itemIndex) =>
                                setMarca(itemMarca)
                            }
                        >
                            <Picker.Item
                                label="Eurofarma"
                                value="eurofarma"
                                fontFamily="sora-regular"
                            />
                            <Picker.Item label="Medley" value="medley" />
                            <Picker.Item label="Geolab" value="geolab" />
                        </Picker>
                    </Component>

                    <Component>
                        <Label>Endereço</Label>

                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                        />
                    </Component>

                    <Component>
                        <Label>Genérico?</Label>

                        <CheckBox
                            disabled={false}
                            value={checkbox}
                            onValueChange={value => setCheckbox(value)}
                            tintColors={{ true: '#37A8E8', false: '#37A8E8' }}
                        />
                    </Component>

                    <EnterButton onPress={() => navigation.navigate('Result')}>
                        <EnterTitle>Busca</EnterTitle>

                        <IconComponent>
                            <IconImage />
                        </IconComponent>
                    </EnterButton>
                </DataGrid>
            </ScrollView>
        </Container>
    );
};

export default Search;
