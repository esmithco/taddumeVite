import React from "react";
import { images } from "../../assets/images";
import "./Footer.css";

function Footer(props) {
  return (
    <footer>
        <div className="footer-images">
            <img className="footer-images--full" src={images.imgFooter} alt=""/>
        </div>
    </footer>
  );
}

export { Footer };