import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useInfiniteQuery, useQuery } from "react-query";
import ProductCard from "../components/ProductCard";
import { AllProducts, getProducts } from '../utils/api';
import { Center, Spinner } from 'native-base';


export function Inicio() {

    const { data, status } = useQuery(['product'], getProducts);

    if (status === 'loading') {
        return <Text>Recuperando los productos...</Text>;
    }

    if (status === 'error') {
        return <Text>Error</Text>;
    }

    return (
        <FlatList
            data={data.results}
            renderItem={({ item }) => <ProductCard id={item} />}
            keyExtractor={item => item.id}
        />
    );
}

