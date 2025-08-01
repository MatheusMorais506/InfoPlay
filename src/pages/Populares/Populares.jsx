import React, { Fragment, useEffect, useState } from 'react'
import api, { api_options } from '../../services/api'
import CardSerie from "../../components/cardSerie/CardSerie"
import Menu from '../../components/menu/Menu';

export default function Populares() {

    const [series, setSeries] = useState([])
    const [filmes, setFilmes] = useState([])

    useEffect(() => { load() }, [] )

    async function load(){
        try{
            const resposta = await api.get("/tv/popular", api_options())
            setSeries(resposta.data.results)

            const respostaFilmes = await api.get("/movie/popular", api_options())
            setFilmes(respostaFilmes.data.results)
        }catch(erro){
        }
    }

    return (
        <Fragment>
            <Menu />
            <div className="content">
                {series.map( (serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div>
              <div className="content">
                {filmes.map( (filme) => <CardSerie key={filme.id} serie={filme} />)}
            </div>
        </Fragment>
    );

}