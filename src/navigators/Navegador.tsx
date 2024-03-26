import React, { useState } from 'react';
import {View} from 'react-native';
import ProductList from '../components/ProductList';
import { Center, Icon, Input, Stack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import Buscador from '../components/Buscador';


export default function Navegador() {
    
    return (
    
    <Stack flex={1} p="12">
        <Buscador/>
        <Center>
            <ProductList />
        </Center>
    </Stack>
            
  );
}
