import { useRef, useState } from "react";

enum Operadores {
    suma,
    resta,
    multi,
    dividir,
  }

export const useCalculator =()=> {
    const [numeroAnterio, setNumeroAnterio] = useState('0');
    const [numero, setNumero] = useState('0');
  
    const ultimaOperacion = useRef<Operadores>();
  
    const limpiar = () => {
      setNumero('0');
      setNumeroAnterio('0');
    };
  
    const armarNumero = (numeroTexto: string) => {
      // setNumero(numero + numeroTexto)
      //no aceptar el doble punto
      if (numero.includes('.') && numeroTexto === '.') return;
  
      if (numero.startsWith('0') || numero.startsWith('-0')) {
        //punto decimal
        if (numeroTexto === '.') {
          setNumero(numero + numeroTexto);
  
          //evaluar si es otro cero y hay punto
        } else if (numeroTexto === '0' && numero.includes('.')) {
          setNumero(numero + numeroTexto);
          //evaluar si es diferente de ero y no tiene un punto
        } else if (numeroTexto !== '0' && !numero.includes('.')) {
          setNumero(numeroTexto);
          //evitar 0000.0
        } else if (numeroTexto === '0' && !numero.includes('.')) {
          setNumero(numero);
        } else {
          setNumero(numero + numeroTexto);
        }
      } else {
        setNumero(numero + numeroTexto);
      }
    };
  
    const psositivoNegativo = () => {
      if (numero.includes('-')) {
        setNumero(numero.replace('-', ''));
      } else {
        setNumero('-' + numero);
      }
    };
  
    const btnDelete = () => {
      let negativo = '';
      let numeroTemp = numero;
      if (numero.includes('-')) {
        negativo = '-';
        numeroTemp = numero.substring(1);
      }
      if (numeroTemp.length > 1) {
        setNumero(negativo + numeroTemp.slice(0, 1));
      } else {
        setNumero('0');
      }
    };
  
    const cambiarNumporAnterior = () => {
      if (numero.endsWith('.')) {
        setNumeroAnterio(numero.slice(0, -1));
      } else {
        setNumeroAnterio(numero);
      }
      setNumero('0');
    };
  
    const btnDividir = () => {
      cambiarNumporAnterior();
      ultimaOperacion.current = Operadores.dividir;
    };
    const btnMulti = () => {
      cambiarNumporAnterior();
      ultimaOperacion.current = Operadores.multi;
    };
    const btnSumar = () => {
      cambiarNumporAnterior();
      ultimaOperacion.current = Operadores.suma;
    };
    const btnRestar = () => {
      cambiarNumporAnterior();
      ultimaOperacion.current = Operadores.resta;
    };
  
    const calcular = () => {
      const num1 = Number(numero);
      const num2 = Number(numeroAnterio);
  
      switch (ultimaOperacion.current) {
        case Operadores.suma:
          setNumero(`${(num1) + (num2)}`);
          break;
        case Operadores.resta:
          setNumero(`${(num2) - (num1)}`);
          break;
        case Operadores.multi:
          setNumero(`${(num1) * (num2)}`);
          break;
        case Operadores.dividir:
            setNumero(`${(num2) / (num1)}`);
            break;
  
  
        default:
          break;
      }

    };

    return{
      limpiar,
      armarNumero,
      numeroAnterio,
      psositivoNegativo,
      numero,
      btnDelete,
      btnDividir,
      btnMulti,
      btnRestar,
      btnSumar,
      calcular
    }
}