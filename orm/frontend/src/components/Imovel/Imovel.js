import React from "react";
import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho.js";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";

import api from "../../services/api.js"

import Moment from 'react-moment'

import "./Imovel.css"
import Geral from "../Geral/Geral.js";

function Imovel() {

  const [imovel, setImovel] = useState([])

  useEffect(() => {
    api.get('imovel')
      .then(response => setImovel(response.data))

  }, []
  )

  return (

    <div id="idImovel" className="imovel">
      <Cabecalho />
      <MenuHorizontal />
      
      <legend>Registros de Imovel Cadastrados</legend>

      <div className="tabela">
        <table className="table table-responsive">
          <thead>
            <tr id='titulo'>
              <th id='t_codigo'> Código </th>
              <th id='t_tipo'> Tipo </th>
              <th id='t_cidade'> Cidade </th>
              <th id='t_area'> Area </th>
              <th id='t_comodos'> Comodos </th>              
              <th id='t_corretor'> Corretor </th>                            
              <th id='t_sobra'>Data Criação</th>
              <th id="t_sobra2">Data de Atualização</th>
            </tr>
          </thead>
          <br></br>

          <tbody>
            {imovel.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_codigo">{item.id}</td>
                    <td id='p_tipo'>{item.tipo}</td>
                    <td id='p_cidade'>{item.cidade}</td>
                    <td id='p_area'>{item.area}</td>
                    <td id='p_area'>{item.comodos}</td>
                    <td id='p_corretor'>{item.corretor}</td>

                    <td id="p_dtinclusao"><Moment format="DD/MM/YYYY">{(item.createdAt)}</Moment> </td>

                    <td id='p_dtalteracao'><Moment format="DD/MM/YYYY">{item.updatedAt}</Moment> </td>

              

                    <td></td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tfoot>
            <tr id='registros'>
              <td>Quantidade de registros: {imovel.length} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Imovel;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
