import React from 'react';

import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const CuadroDeBusqueda = (props) => {

    const {
        textoABuscar,
        eventoCambiarTexto,
        cambiarPantalla,
    } = props;

    return (
        <View
            style={estilos.contenedor}
        >
            <TouchableOpacity
                style={estilos.fondoBotonVolver}
                onPress={
                    () => {
                        cambiarPantalla('perfil');
                    }
                }
            >
                <Image
                    style={estilos.botonVolver}
                    source={require('./../assets/botones/volver.png')}
                />
            </TouchableOpacity>
            <TextInput
                style={estilos.cuadroDeTexto}
                placeholder='Buscar...'
                onChangeText={eventoCambiarTexto}
                defaultValue={textoABuscar}
                placeholderTextColor={'white'}
            />
            <View
                style={estilos.fondoIconoBuscar}
            >
                <Image
                    source={require('./../assets/botones/buscar-orange.png')}
                    style={estilos.iconoBuscar}
                />
            </View>
        </View>
    );

};

const estilos = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2f3640',
        flex: 1,
        height: 48,
        borderRadius: 48,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    fondoBotonVolver: {
        marginHorizontal: 10,
    },
    botonVolver: {
        width: 20,
        height: 20,
    },
    cuadroDeTexto: {
        backgroundColor: 'transparent',
        color: 'white',
        flex: 1,
        height: 40,
    },
    fondoIconoBuscar: {
        backgroundColor: 'white',
        marginHorizontal: 5,
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconoBuscar: {
        width: 20,
        height: 20,
    },
}); 

export default CuadroDeBusqueda;