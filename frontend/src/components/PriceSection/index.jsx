import React from "react";
import { ButtonSecondary } from "../ButtonSecondary";
import { priceList } from "../../assets/data/priceList";
import "./PriceSection.css";

function PriceSection(props) {
  return (
    <section className="PriceSection">
      <h2 className="PriceSection-h2">Planes</h2>
      <div className="PriceSection-div">
        {priceList.map((price, index) => (
          <div className={`PriceSection-div--container ${index === 3 && "PriceSection-div--container---institution"}`} key={index}>
            <div className="container-info">
              <h3 className="container-info--h3">{price.plan}</h3>
              <div className="container-info--details">
                {price.checks.map((check, checkIndex) => (
                  <div className="details-div" key={checkIndex}>
                    <img className="details-div--img" src={check.img} alt="" />
                    <p className="details-div--p">{check.subject}</p>
                  </div>
                ))}
              </div>
              <div className="container-info--price">{price.price}</div>
            </div>
            <button className="container-button">Comprar</button>
          </div>
        ))}
      </div>
      <ButtonSecondary text="Saber más" />
    </section>
  );
}

export { PriceSection };
