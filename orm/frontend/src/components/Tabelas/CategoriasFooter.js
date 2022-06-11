import React from "react";
//import Categorias from "../Categorias/Categorias";

const TabelaFooter = (props) => (
    <tfoot>
        <tr>
            <td >Quantidade de registros: {props.registros} </td>
        </tr>
    </tfoot>
);

export default TabelaFooter;

