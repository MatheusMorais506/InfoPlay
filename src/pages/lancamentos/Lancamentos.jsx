import React, { Fragment, useEffect, useState } from "react";
import api, { api_options } from "../../services/api";
import CardTrending from "../../components/cardFilme/CardFilme"
import Menu from '../../components/menu/Menu';

export default function Lancamentos () {

  const [trending, setSeries] = useState([]);

  useEffect(() => { load() }, [] )

  async function load(){  
  try {
      const resposta = await api.get(
        "/trending/movie/week",api_options());
        setSeries(resposta.data.results)
        console.log(resposta.data.results);
    } catch (error) {
      console.log(error)  
    }
  }

  return (
    <Fragment>
            <Menu />
            <div className="content">
                {trending.map( (filme) => <CardTrending key={filme.id} filme={filme} />)}
            </div>
        </Fragment>
  );
}
