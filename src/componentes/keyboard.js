/***
 * Engloba todos los botones
 */
import React from 'react';
import Boton from "./button";
import BorrarLetra from "./botonborrar";
import BotonEspacio from "./botonespacio";


function Keyboard({ textoInsertado, setTextoInsertado }) {
    

    const eventoBoton = (letra) => {
        setTextoInsertado((prevTexto) => prevTexto + letra);
    }
    const pulsarEspacio = () => {
        setTextoInsertado((prevTexto) => prevTexto + " ");
    }
    const borrarLetra = () => {
        setTextoInsertado((prevTexto) => prevTexto.slice(0, -1));    
    }
    return  <div id="keyboard">
        <Boton click = {eventoBoton} letra = "Q"></Boton>
        <Boton click = {eventoBoton} letra = "W"></Boton>
        <Boton click = {eventoBoton} letra = "E"></Boton>
        <Boton click = {eventoBoton} letra = "R"></Boton>
        <Boton click = {eventoBoton} letra = "T"></Boton>
        <Boton click = {eventoBoton} letra = "Y"></Boton>
        <Boton click = {eventoBoton} letra = "U"></Boton>
        <Boton click = {eventoBoton} letra = "I"></Boton>
        <Boton click = {eventoBoton} letra = "O"></Boton>
        <Boton click = {eventoBoton} letra = "P"></Boton>
        <Boton click = {eventoBoton} letra = "A"></Boton>
        <Boton click = {eventoBoton} letra = "S"></Boton>
        <Boton click = {eventoBoton} letra = "D"></Boton>
        <Boton click = {eventoBoton} letra = "F"></Boton>
        <Boton click = {eventoBoton} letra = "G"></Boton>
        <Boton click = {eventoBoton} letra = "H"></Boton>
        <Boton click = {eventoBoton} letra = "J"></Boton>
        <Boton click = {eventoBoton} letra = "K"></Boton>
        <Boton click = {eventoBoton} letra = "L"></Boton>
        <Boton click = {eventoBoton} letra = "Ñ"></Boton>
        <Boton click = {eventoBoton} letra = "Z"></Boton>
        <Boton click = {eventoBoton} letra = "X"></Boton>
        <Boton click = {eventoBoton} letra = "C"></Boton>
        <Boton click = {eventoBoton} letra = "V"></Boton>
        <Boton click = {eventoBoton} letra = "B"></Boton>
        <Boton click = {eventoBoton} letra = "N"></Boton>
        <Boton click = {eventoBoton} letra = "M"></Boton>
        <BotonEspacio click = {pulsarEspacio}></BotonEspacio>
        <BorrarLetra click = {borrarLetra}></BorrarLetra>
        

    </div>
    
}

export default Keyboard;