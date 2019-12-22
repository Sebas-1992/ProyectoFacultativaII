import React, { Component } from 'react';
import Crear from './../components/crearEstudiantes';
import firebase from 'react-native-firebase'

class CrearContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //estado de nuestros datos
            title: '',
            carrera: '',

            //estado de nuestra interfaz
            estadoEnGuardado: 'comienzo',
        };
    }

    miEventoCambiarTitulo = (title) => {
        this.setState({
            title: title,
            estadoEnGuardado: 'comienzo',
        });
    }

    miEventoCambiarURL = (carrera) => {
        this.setState({
            carrera: carrera,
            estadoEnGuardado: 'comienzo',
        })
    }

    miEventoPressGuardar = () => {

        this.setState({
            estadoEnGuardado: 'cargando',
        })

        const db = firebase.firestore();

        const {
            title,
            carrera,
        } = this.state;

        db
        .collection('estudiantes')
        .add({
            title: title,
            carrera: carrera,
        })
        .then(() => {
            this.setState({
                title: '',
                carrera: '',
                estadoEnGuardado: 'guardado',
            })
        })
        .catch((error) => {
            this.setState({
                estadoEnGuardado: 'error',
            })
        })
    }

    render() {

        const { 
            title,
            carrera,
            estadoEnGuardado,
        } = this.state

        return(
            <Crear
                title={title}
                miEventoCambiarTitulo={this.miEventoCambiarTitulo}
                carrera={carrera}
                miEventoCambiarURL={this.miEventoCambiarURL}
                miEventoPressGuardar={this.miEventoPressGuardar}
                estadoEnGuardado={estadoEnGuardado}
            />
        )

    }

}

export default CrearContainer;