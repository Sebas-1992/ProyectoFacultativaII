import React from 'react';

import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
    Dimensions,
} from 'react-native';

const Perfil = () => {

    return(
        <View>
            <StatusBar hidden={true} />
            <View style={{flex: 1,}}>
                <Image
                    style={estilos.imagenPortada}
                    source={require('./../assets/portada.jpg')}
                />
            </View>
            <View
                style={estilos.contenedorImagenPerfil}
            >
                <Image
                    style={estilos.imagenPerfil}
                    source={require('./../assets/perfil.jpg')}
                />
                <View>
                    <Text
                        style={estilos.nombre}
                    >
                        Estudents
                    </Text>
                </View>
                <View>
                    <Text
                        style={estilos.descripcion}
                    >
                        La enseñanza viene desde el hogar.
                    </Text>
                </View>
            
            </View>
        </View>
    );

};

/*
    Definimos una constante a la cual le asignaremos
    'StyleSheet.create({ AQUI VAN NUESTROS ESTILOS })'
*/
const estilos = StyleSheet.create({
    /* aquí empezamos a escribir nuestros estilos */
    contenedorImagenPerfil: {
        flex: 1,
        marginTop: -75,
        alignItems: 'center',
    },
    imagenPerfil: {
        width: 150,
        height: 150,
        borderRadius: 150,
        resizeMode: 'cover',
        borderWidth: 4,
        borderColor: 'green',
    },
    imagenPortada: {
        width: Dimensions.get('window').width,
        height: 230,
        resizeMode: 'cover',
    },
    nombre: {
        fontSize: 32,
    },
    descripcion: {
        fontSize: 18,
        textAlign: 'center',
    },
    redes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 106,
    },
    imagenRedes: {
        width: 32,
        height: 32,
    },
    /* fin de estilos */
});

export default Perfil;