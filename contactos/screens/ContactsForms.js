import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from '@rneui/base';
import { useState } from "react";
import { saveContactRest } from '../rest_client/contactos.js';


export const ContacsForm = ({ navigation, route }) => {
    // Variable para guardar elcontac que viene del otro lada
    let contactRetrived = route.params.contacParam;
    let isNew = true;

    if (contactRetrived != null) {
        isNew = false;
    }
    console.log("isNew:", isNew);
    console.log("contacRetrived:", contactRetrived);;


    if (!isNew) {

    }

    // Variable de estado
    const [name, setName] = useState(isNew ? null : contactRetrived.nombre);
    const [surname, setSurname] = useState(isNew ? null : contactRetrived.apellido);
    const [phoneNumber, setPhoneNumber] = useState(isNew ? null : contactRetrived.celular);

    // Imprimir el valor para actualizar
    // console.log(route.params.contacParam);

    // Funcion para refewscar mensajes
    const showMessage = () => {
        Alert.alert("CONFIRMACION", "Se creo el Contacto");
    }

    const createContact = () => {
        console.log("SaveContact");
        navigation.goBack();
        saveContactRest(
            {
                name: name,
                surname: surname,
                phoneNumber: phoneNumber
            },
            showMessage
        );
    }

    const updateContact = () =>{
        console.log("Actualizando.... ");
    }


    return <View style={styles.container}>
        <Input
            value={name}
            placeholder="NOMBRE"
            onChangeText={(value) => {
                setName(value);
            }}
        />
        <Input
            value={surname}
            placeholder="APELLIDO"
            onChangeText={(value) => {
                setSurname(value);
            }}
        />
        <Input
            value={phoneNumber}
            placeholder="TELEFONO"
            onChangeText={(value) => {
                setPhoneNumber(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={saveContact}
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