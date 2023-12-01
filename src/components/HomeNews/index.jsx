import React from "react";
import { images } from "../../assets/images";
import { ButtonSecondary } from "../ButtonSecondary";
import "./HomeNews.css";

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

          <a href="../activities/curiosidades/games1.html">
            <ButtonSecondary text="Comenzar" />
          </a>
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
