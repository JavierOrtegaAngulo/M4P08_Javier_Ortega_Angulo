/***
 * Boton
 */

function Boton(props){
    return <button type="button" className="boton-letras"
                    onClick={() => props.click(props.letra)}>
      {props.letra}
    </button>
}

export default Boton;