import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from '@rneui/base';
import { useState } from "react";
import { saveLaptopRest, updateLaptopRest } from '../rest_client/laptos.js';

export const LaptopForm = ({ navigation, route }) => {
    // Variavles para guardar la laptoo que viene dl otro lado 
    let laptopRetrived = route.params.laptopParam;
    let isNew = true;

    if (laptopRetrived != null) {
        isNew = false;
    }

    console.log("isNew:", isNew);
    console.log("laptopRetrived:", laptopRetrived);


    // Variables de estado
    const [marca, setMarca] = useState(isNew ? null : laptopRetrived.marca);
    const [procesador, setProcesador] = useState(isNew ? null : laptopRetrived.procesador);
    const [memoria, setMemoria] = useState(isNew ? null : laptopRetrived.memoria);
    const [disco, setDisco] = useState(isNew ? null : laptopRetrived.disco);

    // Funcion para refrescar los mensajes
    const showMessage = () => {
        Alert.alert("CONFIRMACION", isNew?"Se creo la laptop nueva": "Laptop Actualizada!");
        navigation.goBack();
    }

    const createLaptop = () => {
        console.log("SaveLaptop");
        saveLaptopRest(
            {
                marca: marca,
                procesador: procesador,
                memoria: memoria,
                disco: disco
            },
            showMessage
        );
    }

    const updateLaptop =() =>{
        console.log("Actualizando....");
        updateLaptopRest(
            {
                id:laptopRetrived.id,
                marca: marca,
                procesador: procesador,
                memoria: memoria,
                disco: disco
            },
            showMessage
        )
    }


    return <View style={styles.container}>
        <Input
            value={marca}
            placeholder="MARCA"
            onChangeText={(value) => {
                setMarca(value);
            }}
        />

        <Input
            value={procesador}
            placeholder="PROCESADOR"
            onChangeText={(value) => {
                setProcesador(value);
            }}
        />

        <Input
            value={memoria}
            placeholder="MEMORIA"
            onChangeText={(value) => {
                setMemoria(value);
            }}
        />

        <Input
            value={disco}
            placeholder="DISCO"
            onChangeText={(value) => {
                setDisco(value);
            }}
        />

        <Button
            title="GUARDAR"
            onPress={isNew? createLaptop: updateLaptop}
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