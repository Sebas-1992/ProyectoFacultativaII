import React from 'react';
import {
    createAppContainer,
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';

import Lista from './../containers/lista-container';
import Crear from './../containers/crear-container';
import Editar from './../containers/editar-container';

const stackNavigator = createStackNavigator({
    lista: {
        screen: Lista,
    },
    crear: {
        screen: Crear,
    },
    editar: {
        screen: Editar,
    },
}, {
    defaultNavigationOptions: {
        headerTitle: 'Estudiantes',
        headerStyle: {
            backgroundColor: '#673ab7',
        },
        headerTintColor: '#ffffff',
    },
});

export default createAppContainer(stackNavigator);