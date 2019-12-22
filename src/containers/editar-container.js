import React, { Component } from 'react';
import Editar from './../components/editarEstudiantes';
import firebase from 'react-native-firebase'

class EditarContainer extends Component {

    constructor(props) {
        super(props);

        const photoParaActualizar = props.navigation.getParam('photoParaActualizar', {});

        this.state = {
            //estado de nuestros datos
            key: photoParaActualizar.key,
            title: photoParaActualizar.title,
            carrera: photoParaActualizar.carrera,

            //estado de nuestra interfaz
            estadoEnEditado: 'comienzo',
        };
    }

    miEventoCambiarTitulo = (title) => {
        this.setState({
            title: title,
            estadoEnEditado: 'comienzo',
        });
    }

    miEventoCambiarURL = (carrera) => {
        this.setState({
            carrera: carrera,
            estadoEnEditado: 'comienzo',
        })
    }

    miEventoPressEditar = () => {

        this.setState({
            estadoEnEditado: 'cargando',
        })

        const db = firebase.firestore();

        const {
            key: photoId,
            title,
            carrera,
        } = this.state;

        db
        .collection('estudiantes')
        .doc(photoId)
        .update({
            title: title,
            carrera: carrera,
        })
        .then(() => {
            this.setState({
                title: '',
                carrera: '',
                estadoEnEditado: 'guardado',
            })
        })
        .catch((error) => {
            console.log("error: ", error);
            this.setState({
                estadoEnEditado: 'error',
            })
        })
    }

    render() {

        const { 
            title,
            carrera,
            estadoEnEditado,
        } = this.state

        return(
            <Editar
                title={title}
                miEventoCambiarTitulo={this.miEventoCambiarTitulo}
                carrera={carrera}
                miEventoCambiarURL={this.miEventoCambiarURL}
                miEventoPressEditar={this.miEventoPressEditar}
                estadoEnEditado={estadoEnEditado}
            />
        )

    }

}

export default EditarContainer;