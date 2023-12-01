import React from "react";
import { Header } from '../../components/Header';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { MenuHeader } from "../../components/MenuHeader";
import { HomeNews } from "../../components/HomeNews";
import { LearnSection } from "../../components/LearnSection";
import { AccompanimentSection } from "../../components/AccompanimentSection";
import { StorySection } from "../../components/StorySection";
import { PriceSection } from "../../components/PriceSection";
import { Footer } from "../../components/Footer";
import { images } from "../../assets/images";
import './Home.css'

function Home() {
  return (
    <>
      <Header img1={images.imgColorLogo} img2={images.imgLogoMobile}>
        <MenuHeader />
        <div className="header-buttons">
          <a className="header-a">
            Ingresar
          </a>
          <ButtonPrimary text="Crear cuenta" />
        </div>
      </Header>

      <HomeNews />

      <LearnSection />

      <div className="home-divMancha1">
        <img
          className="home-divMancha1--img"
          src={images.imgMancha1}
          alt=""
        />
      </div>

      <AccompanimentSection />

      <img
        className="homeMancha2"
        src={images.imgMancha2}
        alt=""
      />

      <StorySection />

      <div className="home-divMancha3">
        <img 
          className="home-divMancha3--img" 
          src={images.imgMancha3} 
          alt="" 
        />
      </div>
      
      <PriceSection />

      <img 
        className="homeMancha4" 
        src={images.imgMancha4} 
        alt="" 
      />

      <Footer />
    </>
  );
}

export { Home }