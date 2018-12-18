import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Product = props => {

    const [amount, setTotalAmount] = useState(0);
    buy = () => setTotalAmount(amount + 1);

    return (
        <View>
            <Text style={style.textStyle}> {props.name} </Text>
            <Text style={style.textStyle}> Amount: {amount} </Text>
            <Button title="Buy" onPress={buy} />
        </View>
    );
};

const style = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        padding: 20
    }
});

export default Product;
