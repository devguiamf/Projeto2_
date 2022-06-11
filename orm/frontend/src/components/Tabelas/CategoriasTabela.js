import React from "react";
import TabelaHeader from "./CategoriasHeader";
import TabelaFooter from "./CategoriasFooter";
import Categorias from "../Categorias/Categorias";

export default function Tabela(props) {


    const arrayDados = props.dados;
    console.log("Dados: " + props.dados)


    return (
        <div className="tabela">
            <table>
                <thead>
                    <tr>
                        <th scope="col"> Código </th>
                        <th scope="col"> Descrição da Categoria </th>
                        <th scope="col"> Inclusão </th>
                        <th scope="col"> Alteração </th>
                    </tr>
                </thead>

                <tbody>



                    <tr>
                        <td>{item.id}</td>
                        <td>{item.cat_descricao}</td>
                        <td>{item.created_at}</td>
                        <td>{item.updated_at}</td>

                        <td> <button className="btnEditar">Editar</button> </td>
                        <td> <button className="btnRemover">Remover</button> </td>
                    </tr>

                </tbody>
                <TabelaFooter registros={props.dados.length} />
            </table>
        </div>
    )


}

