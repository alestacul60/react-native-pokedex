import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";

const ProductList = () => {
    
    const getProducts = async () => {
        const response = await fetch(`https://peticiones.online/api/products?page=1`);
        return response.json();
    }

    const { data, status } = useQuery(['products'], getProducts);

    if (status === 'loading') {
        return <Text>Recuperando los productos...</Text>;
    }

    if (status === 'error') {
        return <Text>Error</Text>;
    }

    return (
        <FlatList
            data={data.results}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={item => item.id}
        />
    );
}

export default ProductList;