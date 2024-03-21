import { useQuery } from 'react-query';
import { fetchFn, Pokemon } from '../utils/api';
import { useNavigation } from '@react-navigation/native';
import type { MainStackScreenProps } from '../navigators/types';
import { Box, Heading, Image, Text, HStack, Pressable, Center, AspectRatio, Skeleton, Stack } from 'native-base';
import { formatNumber, getTypeColor } from '../utils/helper';

interface PokemonCardProps{
    url: string;
    name: string;
}

export default function PokemonCard({url, name} : PokemonCardProps ){
    const { isLoading, error, data} = useQuery<Pokemon>(['pokemon', name], () => fetchFn(url))
    const navigation = useNavigation<MainStackScreenProps<'Home'>['navigation']>();

    if (isLoading) return (
        <Stack flex={1} space={2} borderRadius={10} m="1.5" p="4" >
            <Skeleton h="32"/>
            <Skeleton.Text px="4"/>
        </Stack>
    );
    if(!data || error) return null

    return(
        <Pressable 
            flex= {1}
            m= "1.5"
            p= "4"
            borderRadius={10}
            backgroundColor={getTypeColor(data.types[0].type.name) + '.500'}
            onPress={() => navigation.navigate('Detail', { name })}>
                <Center>
                    <AspectRatio ratio={1} width="80%">
                        <Image
                            source={{
                                uri: data.sprites.other['official-artwork'].front_default,
                            }}
                            alt="image"
                        />
                    </AspectRatio>
                </Center>
                <HStack justifyContent={'space-between'} mb={2}>
                    <Heading textTransform={'capitalize'} color={'white'} size={'sm'}>{data.name}</Heading >
                    <Text color={'white'}>#{formatNumber(data.id)}</Text>
                </HStack>
                <HStack>
                    {data.types.map((type) => (
                        <Box key={type.type.name}
                             px="2" 
                             mr="1"
                             backgroundColor={getTypeColor(data.types[0].type.name) + '.400'}
                             borderRadius={10}
                             _text={{
                                color:'white',
                                fontSize: 'xs',
                             }}
                             >{type.type.name}</Box>
                    ))}
                </HStack>
        </Pressable>
    )
}