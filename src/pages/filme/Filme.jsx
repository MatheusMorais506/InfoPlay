import React, { Fragment, useEffect, useState } from "react";
import api, { api_options } from "../../services/api";
/*import CardTempFilmes from "../../components/cardTemporada/CardTempFilmes";*/
import "../serie/Serie.css";

export default function Populares(props) {
  const { filmeId } = props.match.params;
  const [filme, setSerie] = useState([]);
  const [genres, setGenres] = useState([]);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w300/";
  const imgBgBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const resposta = await api.get(`/movie/${filmeId}`, api_options());
      setSerie(resposta.data);
      setGenres(resposta.data.genres);
      console.log(resposta.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <Fragment>
      <div className="hero">
        <div
          className="bg"
          style={{
            backgroundImage: `url(${imgBgBaseUrl}${filme.backdrop_path})`,
          }}/*imagem de background*/
        ></div>

        <button className="btn-back" onClick={props.history.goBack}>
          <span className="material-icons">navigate_before</span>
          voltar
        </button>{/*Botão de 'Voltar'*/}

        <img src={`${imgBaseUrl}${filme.poster_path}`} alt="poster"/>/{/*Poster*/}

        <div className="serie-info">
          <h1>{filme.title}</h1>{/*TItulo*/}
          
          <div className="score">
            <span className="material-icons">grade</span>
            {filme.vote_average}{/*Nota*/}
          </div>

          <p className="genres">
            {genres.map((genero) => {
              return genero.name + " | ";
            })}
          </p>{/*Gênero*/}

          <p>{filme.overview}</p>{/*Resumo*/}
        </div>
      </div>
    </Fragment>
  );
}
