import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {
    Container,
    LHeader,
    LHeaderTitle,
    DataGrid,
    Component,
    Label,
    Input,
    EnterButton,
    EnterTitle,
    IconComponent,
    IconImage,
} from './styles';

const Search: React.FC = () => {
    const [checkbox, setCheckbox] = useState<boolean>();

    const marcaInputRef = useRef<typeof Input>();
    const enderecoInputRef = useRef<typeof Input>();

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <LHeader>
                    <LHeaderTitle>Farmacare</LHeaderTitle>
                </LHeader>

                <DataGrid>
                    <Component>
                        <Label>Medicamento</Label>

                        <Input
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                marcaInputRef.current?.focus();
                            }}
                        />
                    </Component>

                    <Component>
                        <Label>Marca</Label>

                        <Input
                            ref={marcaInputRef}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                enderecoInputRef.current?.focus();
                            }}
                        />
                    </Component>

                    <Component>
                        <Label>Endereço</Label>

                        <Input
                            ref={enderecoInputRef}
                            secureTextEntry
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

                    <EnterButton>
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
