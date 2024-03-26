import { MainStackScreenProps } from "../navigators/types";
import { Pokemon, Product, Species, fetchFn, fetchPokemon, getOneProduct } from "../utils/api";
import { useQuery } from "react-query";
import { AspectRatio, Text, Image, Stack, HStack, Heading, Center, Skeleton  } from 'native-base';
import { formatNumber, getTypeColor, removeEscapeCharacters } from "../utils/helper";

export function Detalle({ route } : MainStackScreenProps<'Detalle'>){
    const { id } = route.params
    
    const { data } = useQuery<Product>(['product', id], () => getOneProduct(id))

    if(!data) return null;
    return (
        <Stack>
        <Center
          safeArea
          backgroundColor={'white'}
        >
          <AspectRatio ratio={1} width="80%">
            <Image
              source={{
                uri: product.image,
              }}
              alt="image"
            />
          </AspectRatio>
          <HStack
            justifyContent="space-between"
            width="100%"
            p="3"
            alignItems="center"
            position="absolute"
            bottom={0}
            left={0}
            right={0}
          >
            <Heading color="white" textTransform="capitalize" size="2xl">
              {product.name}
            </Heading>
            <Heading color="white">#{formatNumber(data.id)}</Heading>
          </HStack>
        </Center>
        <Stack p="3">
          <HStack justifyContent="center">
            {data.types.map((type) => (
              <Center
                key={type.type.name}
                backgroundColor={getTypeColor(type.type.name) + '.500'}
                rounded="full"
                p="1"
                minW="32"
                _text={{
                  color: 'white',
                  fontSize: 'lg',
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}
                mx="2"
              >
                {product.name}
              </Center>
            ))}
          </HStack>

        </Stack>
      </Stack>
    )
}