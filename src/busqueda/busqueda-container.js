import React, { Component } from 'react';

import Resultados from './resultados';

class BusquedaContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textoABuscar: '',
        };
    }

    eventoCambiarTexto = (texto) => {
        this.setState({
            textoABuscar: texto,
        });
    };

    realizarBusqueda = () => {

        const {
            publicaciones,
        } = this.props;

        const { textoABuscar } = this.state;

        if(publicaciones.length <= 0) return [];

        const publicacionesFiltradas = publicaciones.filter(texto => {
            console.info(texto, ' <michel> ', textoABuscar);
            return texto.titulo.toLowerCase().indexOf(textoABuscar.toLowerCase()) > -1;
        });

        return publicacionesFiltradas;
    };

    render() {

        const {
            textoABuscar,
        } = this.state;

        const {
            cambiarPantalla
        } = this.props;

        const publicacionesFiltradas = this.realizarBusqueda();

        return (
            <Resultados
                textoABuscar={textoABuscar}
                eventoCambiarTexto={this.eventoCambiarTexto}
                publicaciones={publicacionesFiltradas}
                cambiarPantalla={cambiarPantalla}
            />
        );

    }

}

export default BusquedaContainer;