import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

const Separador = () => {
    
    return (
        <View>
            <View style={estilos.espacio}></View>
        </View>
    );

};

const estilos = StyleSheet.create({
    espacio: {
        height: 16,
    },
});

export default Separador;