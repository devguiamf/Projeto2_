import React from "react";
import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho.js";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";

import api from "../../services/api.js"

import Moment from 'react-moment'

import "./Corretor.css"
import Geral from "../Geral/Geral.js";

function Corretor() {

  const [corretor, setCorretor] = useState([])

  useEffect(() => {
    api.get('corretor')
      .then(response => setCorretor(response.data))

  }, []
  )

  return (

    <div id="idCorretor" className="corretor">
      <Cabecalho />
      <MenuHorizontal />
      
      <legend>Registros de Corretor Cadastrados</legend>

      <div className="tabela">
        <table className="table table-responsive">
          <thead>
            <tr id='titulo'>
              <th id='t_codigo'> Código </th>
              <th id='t_nome'> Nome </th>
              <th id='t_telefone'> Telefone </th>
              <th id='t_crea'> Crea </th>
              {/* <th id="novo"> <a class="btn btn-success btn-block">Novo Registro</a> </th>               */}
              <th id='t_sobra'>Horário Criado</th>
              <th id="t_sobra2">Horário Atualizado</th>
            </tr>
          </thead>
          <br></br>

          <tbody>
            {corretor.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_codigo">{item.id}</td>
                    <td id='p_nome'>{item.nome}</td>
                    <td id='p_telefone'>{item.telefone}</td>
                    <td id='p_crea'>{item.crea}</td>

                    <td id="p_dtinclusao"><Moment format="DD/MM/YYYY">{(item.createdAt)}</Moment> </td>

                    <td id='p_dtalteracao'><Moment format="DD/MM/YYYY">{item.updatedAt}</Moment> </td>

                    {/* <td id="editar"> <a class="btn btn-primary btn-block"> Editar </a></td>
                    <td id="remover"> <a class="btn btn-danger btn-block"> Remover </a></td> */}

                    <td></td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tfoot>
            <tr id='registros'>
              <td>Quantidade de registros: {corretor.length} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Corretor;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
