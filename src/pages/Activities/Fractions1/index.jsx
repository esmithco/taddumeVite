import { useContext } from 'react';
import { FractionContext } from '../../../Contexts/FractionContext';
import { Header } from '../../../components/Header';
import { MenuHeader } from '../../../components/MenuHeader';
import { ButtonThird } from '../../../components/ButtonThird';
import { ButtonPrimary } from '../../../components/ButtonPrimary';
import { Triangle } from '../../../components/Triangle';
import { images } from "../../../assets/images";
import './Fractions1.css'

function Fractions1() {
  const {
    handleButtonClick,
  } = useContext(FractionContext);

  const buttons = [3, 4, 5, 6];

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

      <div className='containerActivity'>
        <div>
          {buttons.map((button) => (
            <ButtonThird
              key={button}
              text={button}
              onClick={() => handleButtonClick(button)}
            />
          ))}
        </div>

        <Triangle />
      </div>
    </>
  );
}

export { Fractions1 }