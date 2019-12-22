import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

const BotonesDePublicacion = (props) => {

    const {
        cambiarPantalla,
        miEventoPressPantallaCrear,
    } = props;

    return (
        <View
            style={estilos.contenedor}
        >
            <Text
                style={estilos.encabezado}
            >
                Publicaciones
            </Text>

            <View
                style={estilos.botonesContenedor}
            >
                <TouchableOpacity
                    style={estilos.botonPublicar}
                    onPress={miEventoPressPantallaCrear}
                >
                    <Image
                        style={estilos.imagenBuscar}
                        source={require('./../assets/botones/publicar.png')}
                    />
                    <Text
                        style={estilos.textPublicar}
                    >
                        Publicar
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );

};

const estilos = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        marginHorizontal: 4,
        marginBottom: 8,
    },
    encabezado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#263238',
    },
    botonesContenedor: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    botonPublicar: {
        flexDirection: 'row',
        height: 40,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ede7f6',
        borderRadius: 40,
        marginRight: 4,
    },
    textPublicar: {
        color: '#673ab7',
        fontWeight: 'bold',
    },
    botonBuscar: {
        height: 40,
        width: 40,
        backgroundColor: '#ede7f6',
        padding: 4,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagenBuscar: {
        width: 22,
        height: 22,
    },
});
export default BotonesDePublicacion;