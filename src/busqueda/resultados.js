import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    View,
    StyleSheet,
} from 'react-native';

import CuadroDeBusqueda from './cuadro-de-busqueda';
import Galeria from './../mi-cuenta/galeria';
import Separador from './../utilidades/separador';

const Resultados = (props) => {

    const {
        publicaciones,
        textoABuscar,
        eventoCambiarTexto,
        cambiarPantalla,
    } = props;

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={estilos.contenedor}>
                    <CuadroDeBusqueda
                        textoABuscar={textoABuscar}
                        eventoCambiarTexto={eventoCambiarTexto}
                        cambiarPantalla={cambiarPantalla}
                    />
                    <Separador />
                    <Galeria
                        publicaciones={publicaciones}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );

};

const estilos = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
});

export default Resultados;