// Importar el View
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllLaptops } from "../rest_client/laptos"
import { useState } from "react";

// DEfinicion del componente
export const LaptopsList = ({navigation}) => {

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


    return <View style = {styles.container}>
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

        <FAB
            title="+"
            onPress={() => { navigation.navigate("LaptopFormNav") }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column', // Principal eje vertical
        alignItems: 'stretch', // eje secundario
        justifyContent: 'flex-start', // JP
    },
});