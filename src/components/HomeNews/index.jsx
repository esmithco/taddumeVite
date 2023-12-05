import React from "react";
import { images } from "../../assets/images";
import { ButtonSecondary } from "../ButtonSecondary";
import "./HomeNews.css";
import { NavLink } from "react-router-dom";

function HomeNews(props) {
  return (
    <section className="HomeNews">
      <img
        className="HomeNews-banner"
        src={images.imgBackgroundPurple}
        alt=""
      />
      <div className="HomeNews-container">
        <div className="HomeNews-texts">
          <h2 className="HomeNews-texts--h2">
            La mejor plataforma <br />
            para aprender
          </h2>
          <p className="HomeNews-texts--p">
            Se el mejor de la clase aprendiendo con Taddume, tu asistente
            educativo virtual favorito que te motiva a impulsar y transformar tus
            estudios ¿Qué esperas para aprender?
          </p>

          <NavLink to='/activities/fractions1'>
            <ButtonSecondary text="Comenzar" />
          </NavLink>
        </div>

        <div className="HomeNews-img">
          <img
            className="HomeNews-img--woman"
            src={images.imgWomanBanner}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export { HomeNews };
