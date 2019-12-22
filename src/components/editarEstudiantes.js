import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const Editar = (props) => {
    
    const {
        title,
        miEventoCambiarTitulo,
        carrera,
        miEventoCambiarURL,
        miEventoPressEditar,
        estadoEnEditado,
    } = props
    return (
        <View style = {styles.container}>
            <View>
            <Text style = {styles.textD}>Nombre del estudiante</Text>
                <TextInput
                    value={title}
                    onChangeText={miEventoCambiarTitulo}
                    editable={ estadoEnEditado === 'cargando' ? false : true }
                    style = {styles.caja}
                />
            </View>
            <View style = {styles.div}/>
            <View>
            <Text style = {styles.textD}>Carrera del estudiante</Text>
                <TextInput
                    value={carrera}
                    onChangeText={miEventoCambiarURL}
                    editable={ estadoEnEditado === 'cargando' ? false : true }
                    style = {styles.caja}
                />
            </View>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    title={'Guardar'}
                    onPress={miEventoPressEditar}
                    disabled={ estadoEnEditado === 'cargando' ? true : false }
                    style = {styles.buttonGuardar}
                >
                     <Text style = {styles.text}>
                        Actualizar estudiante
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    buttonGuardar: {
        padding: 10,
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        width: '85%',
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25
    }, 
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    textD: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
        marginHorizontal: 10
    },
    caja: {
        padding: 5,
        backgroundColor: '#673ab7',
        borderRadius: 20,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        color: '#FFFFFF'
    },
    div:{
        height: 20
    },
    container:{
        flex: 1,
    
    }
})

export default Editar;