import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Cart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        console.log("lkjjkd")
        getStorage()
    }, [])
    

    async function getStorage(cartStock) {


        var arr = await AsyncStorage.getItem("cart");
        console.log(arr);
        console.log(cartStock);
        arr.stock = cartStock;
        arr = JSON.parse(arr);

        setCart([...arr], arr.stock);
    }
    function add(params) {
        // console.log(params.stock);
        params.stock--;
        getStorage(params.stock);
    }
    return (
        <FlatList
            data={cart}
            renderItem={({ item }) => <View style={{ alignItems: 'center', margin: 15 }}>
                <View style={styles.card}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Image
                            style={styles.img}
                            source={{ uri: item.thumbnail }} />
                        <View style={{ alignItems: "center", justifyContent: "space-between", marginHorizontal: 50 }}>
                            <Text>{item.price}</Text>
                            <Text>{item.stock}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => add(item)}><Ionicons name="ios-add-circle-outline" size={25} color="#ff7700" /></TouchableOpacity>
                        <TouchableOpacity onPress={() => min()}><Ionicons name="ios-add-circle-outline" size={25} color="#ff7700" /></TouchableOpacity></View>
                </View></View>} />

    )
}

export default Cart

const styles = StyleSheet.create({
    card:
    {
        width: "100%",
        backgroundColor: "white",
        elevation: 20,
        borderRadius: 30,
        height: 90,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    img:
    {
        width: 80,
        height: 80,
        borderRadius: 80,
        marginTop: 5
    }
})