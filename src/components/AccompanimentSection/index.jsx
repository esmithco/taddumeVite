import React from "react";
import { ButtonSecondary } from "../ButtonSecondary";
import { images } from "../../assets/images";
import "./AccompanimentSection.css";

function AccompanimentSection(props) {
  return (
    <section className="Accompaniment">
      <div className="Accompaniment-info">
        <div className="Accompaniment-info-texts">
          <h2 className="texts-h2">Nuestro acompañamiento</h2>
          <p className="texts-p">
            Acompañamos cada uno de tus pasos en tu proceso estudiantil,
            descubre en nuestra plataforma diversas actividades para ser el
            mejor de tu clase y aprender de una forma sencilla, divertida y
            eficiente. El 90% de los estudiantes de la comunidad de Taddume
            logra ver cambios en sus estudios en tan solo una semana
          </p>
        </div>

        <ButtonSecondary text="Saber más" />
      </div>

      <div className="Accompaniment-divImg">
        <img
          className="Accompaniment-divImg--Img"
          src={images.imgAccompWoman}
          alt=""
        />
      </div>
    </section>
  );
}

export { AccompanimentSection };
