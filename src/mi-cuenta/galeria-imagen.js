import React from 'react';

import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const GaleriaImagen = (props) => {

    const {
        id,
        carrera,
        titulo,
        miEventoPressPantallaEditar,
    } = props;

    console.log("Key: ", id);

    return (
        <TouchableOpacity
            style={estilos.contenedor}
            onPress={
                () => {
                    miEventoPressPantallaEditar({
                        key: id,
                        title: titulo,
                        carrera: carrera,
                    });
                }
            }
        >
             <View
                    style={estilos.contenedorTexto}
                >
                    <View style={estilos.fondoTexto}>
                        <Text style={estilos.texto}>
                            {titulo}
                        </Text>
                        <Text style={estilos.texto}>
                            {carrera}
                        </Text>
                    </View>
                </View>
        </TouchableOpacity>
    );

};

/*
    Definimos una constante a la cual le asignaremos
    'StyleSheet.create({ AQUI VAN NUESTROS ESTILOS })'
*/
const estilos = StyleSheet.create({
    /* aquí empezamos a escribir nuestros estilos */
    contenedor: {
        flex: 1,
        height: 50,
        margin: 4,
    },
    contenedorText: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
        flex: 1,
        flexWrap: 'nowrap',
    },
    fondoTexto: {
        height: 40,
        opacity: 0.6,
        backgroundColor: '#000',
    },
    /* fin de estilos */
});

export default GaleriaImagen;