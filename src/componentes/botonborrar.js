/*** 
 * Boton Borrar
*/

    function BorrarLetra(props) {
        return <button type="button" className="borrar"
                    onClick={props.click}
        >{props.letra}</button>
    }


    export default BorrarLetra;