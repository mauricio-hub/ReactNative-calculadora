import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor:'black',
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'
        
    },
    resultado:{
        color: '#fff',
        fontSize:60,
        textAlign:'right',
        marginBottom:10
    },
    resultadoPequeño:{
        color: '#ffffff68',
        fontSize:30,
        textAlign:'right',
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        margin:2,
        padding:8 ,
    },
    boton:{
        height:80 ,
        width: 80,
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10

    },
    botonTexto:{
        textAlign:'center',
        padding: 10,
        fontSize:30,
        color: '#000000',
        fontWeight:'300'

    },
  
    
    
});