// Importar el View
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, ListItem } from "@rneui/base"
import { getAllLaptops } from "../rest_client/laptos"
import { useState } from "react";

// DEfinicion del componente
export const LaptopsList = () => {

    // Es una variable de estado
    // Se cre aun objeto para ver que tal
    const [LaptopList, setLaptopsList] = useState([]);

    // Funcion que retorne un dir
    const LaptopItem = ({ laptop }) => {
        return <ListItem>
            <ListItem.Content>
                <ListItem.Title>{laptop.marca} {laptop.procesador}</ListItem.Title>
                <ListItem.Subtitle>{laptop.memoria} {laptop.disco}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    }


    fnRefreshList = (laptos) => {
        console.log("Refrescar lista!!", laptos)
        setLaptopsList(laptos);

    }


    return <View>
        <Text>LISTA DE LAPTOPS!</Text>
        <Button
            title="Consultar"
            onPress={() => {
                getAllLaptops(fnRefreshList);
            }}
        />
        <FlatList
            data={LaptopList}
            renderItem={({ item }) => {
                return <LaptopItem laptop={item} />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});