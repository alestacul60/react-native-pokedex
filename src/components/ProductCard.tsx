import React from 'react';
import { Box, Heading, Image, Text, HStack, Pressable, Center, AspectRatio, Skeleton, Stack } from 'native-base';
import { Product, ProductCardProps, getOneProduct, getProducts } from '../utils/api';
import { useQuery } from 'react-query';
import { MainStackScreenProps } from '../navigators/types';
import { useNavigation } from '@react-navigation/native';
  
export default function ProductCard({ id } : ProductCardProps ){

    const { isLoading, error, data} = useQuery<Product>(['product', id], () =>  getOneProduct(id))
    const navigation = useNavigation<MainStackScreenProps<'Inicio'>['navigation']>();


    if (isLoading) return (
        <Stack flex={1} space={2} borderRadius={10} m="1.5" p="4" >
            <Skeleton h="32"/>
            <Skeleton.Text px="4"/>
        </Stack>
    );
    if(!data || error) return null
    
    console.log(data);
    return (

        <Pressable
        flex= {1}
            m= "1.5"
            p= "4"
            borderRadius={10}
            backgroundColor={'white'}
            // onPress={() => navigation.navigate('Detalle', data.id )}
            >

       <Box alignItems="center" marginTop={2}>
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{ uri: data.image}} alt="image" />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
            {data.name}
            </Heading>
            <Text fontSize="xs" _light={{color: "violet.500"}} _dark={{color: "violet.400"}} fontWeight="500" ml="-0.5" mt="-1">
              {data.category}
            </Text>
          </Stack>

          <Text fontWeight="400">
          {data.description}
          </Text>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">

              <Text color="coolGray.600" _dark={{color: "warmGray.200" }} fontWeight="400">
                USD {data.price}
              </Text>

            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>

    </Pressable>



    );
}
