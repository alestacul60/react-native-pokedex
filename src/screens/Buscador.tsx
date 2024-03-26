import { useState, useEffect } from "react";
import { Stack, Input, Spinner, Icon, Text, Center } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useQuery } from "react-query";
import { Pokemon, fetchPokemon } from "../utils/api";
import { MainStackScreenProps } from "../navigators/types";

export function Buscador({ navigation }: MainStackScreenProps<'Buscador'>){

    const [text,setText] = useState('');

    const {data, isFetching , error} = useQuery<Pokemon>(['pokemon', text], () => fetchPokemon(text.toLowerCase()), {
        enabled: !!text,
    });

    useEffect(() =>{
        if( data ){
            navigation.replace('Detail', {name: data.name});
        }
    },[data]);

    return (
        <Stack flex={1} p="4">
            <Input
            placeholder="Busca un Pokemon por nombre o por numero"
            backgroundColor='white'
            rounded='xl'
            py={3}
            px={1}
            fontSize={14}
            returnKeyType="search"
            onSubmitEditing={({ nativeEvent }) => setText(nativeEvent.text)}
            InputLeftElement={
                <Icon 
                m={2}
                ml={3}
                size={6}
                color='gray.400'
                as={<MaterialIcons name="search" />}
                />
            }
            />
            <Center flex={1}>
                <Text fontSize='xl' color='gray.500'>Buscando {text} en tu casa, corneta</Text>
                { isFetching  && <Spinner size='lg' /> }
            </Center>
        </Stack>
    )
}