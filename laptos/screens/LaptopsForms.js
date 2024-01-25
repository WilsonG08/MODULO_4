import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from '@rneui/base';
import { useState } from "react";
import { saveLaptopRest } from '../rest_client/laptos.js';

export const LaptopForm = ({ navigation }) => {
    // Variables de estado
    const [marca, setMarca] = useState();
    const [procesador, setProcesador] = useState();
    const [memoria, setMemoria] = useState();
    const [disco, setDisco] = useState();

    // Funcion para refrescar los mensajes
    const showMessage = () => {
        Alert.alert("CONFIRMACION", "Se creo la laptop nueva");
    }

    const saveLaptop = () => {
        console.log("SaveLaptop");
        navigation.goBack();
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
        onPress={saveLaptop}
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