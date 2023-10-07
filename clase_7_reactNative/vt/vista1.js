import react from "react";
import { Text, View, Image, StyleSheet, Button, TouchableOpacity, Alert, TextInput } from "react-native-web";


let estilos = StyleSheet.create({
    TamanoImg :{
        height: 50,
        width: 50
    },
    Letra : {
        fontSize:30,
        fontWeight: "Bold",
    },
    Boton: {
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        height: 30,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    }
    });

export default function Vista1(){
    return(
        <View>
            <Image style={{heigth:100, width:100}} uri="https://th.bing.com/th/id/OIP.H0YVT-7yU-1K1A_HXJrFjgHaMC?pid=ImgDet&rs=1"/>
            <Text style={estilos.Letra}>Hola desde vista 1</Text>

            <Image
            style={estilos.TamanoImg}
            source={require("./assets/favicon.png")}
            />

            <Button
             title="Click aqui"
             color="#202020"
             onPress={() => console.log("Hola " + nombre)}
            />

            <TouchableOpacity style={estilos.Boton}
             onPress={() => console.log("Hola desde TouchableOpacity")}>
            <Text>Hola</Text>
            </TouchableOpacity>

            <TextInput
            style={estilos.input}
            placeholder="Nombre"
            onChangeText={(texto) => setNombre(texto)}
            />

        </View>
    );
};

