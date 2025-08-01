import React from "react";
import "./CardSerie.css";
import { NavLink } from "react-router-dom";

export default function CardSerie({ serie }) {
  const nota = serie.vote_average.toFixed(1);
  const imgUrl = "https://image.tmdb.org/t/p/w400/";
  const data = new Date(serie.first_air_date);
  const data_lancamento = data.toLocaleDateString();

  return (
     <NavLink to={`/serie/${serie.id}`} className="btn-detail">
    <div className="CardSerie">
      {/* <span className="material-icons FavButton">add_circle_outline</span> */}

      <div
        className="img-header"
        style={{ backgroundImage: `url(${imgUrl}${serie.poster_path})` }}
      ></div>

      {/* <div className="detail">
        <div className="score">
          <span className="material-icons">grade</span>
          {nota}
        </div>
        <h2>{serie.name}</h2>
        <h3>{data_lancamento}</h3>
      </div> */}

      {/* <NavLink to={`/serie/${serie.id}`} className="btn-detail">
        <span className="material-icons">add_circle</span>
        detalhes
      </NavLink> */}


    </div>
     </NavLink>

  );
}
