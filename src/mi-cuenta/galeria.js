import React from 'react';

import {
    FlatList,
    StyleSheet,
} from 'react-native';

import GaleriaImagen from './galeria-imagen';

import BotonesDePublicacion from './botones-de-publicacion';

const Galeria = (props) => {

    const {
        publicaciones,
        cambiarPantalla,
        miEventoPressPantallaCrear,
        miEventoPressPantallaEditar,
    } = props;

    return(
        <FlatList
            ListHeaderComponent={
                <BotonesDePublicacion
                    cambiarPantalla={cambiarPantalla}
                    miEventoPressPantallaCrear={miEventoPressPantallaCrear}
                />
            }
            data={publicaciones}
            renderItem={
                ({ item, index }) => {
                    console.log("item: *-*  ", item.key);
                    return (
                        <GaleriaImagen
                            id={item.key}
                            titulo={item.title}
                            carrera={item.carrera}
                            miEventoPressPantallaEditar={miEventoPressPantallaEditar}
                        />
                    );
                }
            }
            keyExtractor={item => item.title}
            numColumns={3}
        />
    );
    
};

const estilos = StyleSheet.create({
});

export default Galeria;