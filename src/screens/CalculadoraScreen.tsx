import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculator} from '../hooks/useCalculator' 


export const CalculadoraScreen = () => {
  const {numeroAnterio,armarNumero,btnDelete,btnMulti,btnDividir,btnRestar,btnSumar,calcular,limpiar,numero,psositivoNegativo} = useCalculator()

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterio !== '0' && (
        <Text style={styles.resultadoPequeño}>{numeroAnterio}</Text>
      )}

      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={psositivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" accion={btnDelete} />
        <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="*" color="#FF9427" accion={btnMulti} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};
