/***
 * Boton Espacio
 */

function BotonEspacio(props) {
    return <button type="button" className="espacio"
                    onClick={props.click}
        >{props.letra}</button>
}

export default BotonEspacio;