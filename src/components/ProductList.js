import React from 'react';
import { View } from 'react-native';
import Product from './Product';

const ProductList = props => {
    const products = [
        {
            id: 1,
            name: "Android"
        },
        {
            id: 2,
            name: "Nokia"
        },
        {
            id: 3,
            name: "Iphone"
        }
    ];
    
    return (
        <View>
            {products.map(product => <Product name={product.name} key={product.id} />)}
        </View>
    );
};

export default ProductList;