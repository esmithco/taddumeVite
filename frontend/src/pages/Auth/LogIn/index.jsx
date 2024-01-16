import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../../Contexts/AuthContext";
import { images } from "../../../assets/images";
import "./LogIn.css";

function LogIn() {

  const navigate = useNavigate();
  const { login } = AuthData();
  const [ formData, setFormData ] = useReducer((formData, newItem) => { return ( {...formData, ...newItem} )}, { email: "", password: ""})
  const [ errorMessage, setErrorMessage ] = useState(null)

  const doLogin = async (e) => {
    e.preventDefault(); 
    try {
      await login(formData.email, formData.password)
      console.log(response)
    } catch (error) {
      setErrorMessage(error);
    }
  }
  return (
    <>
      <div className="login">
        <div className="login-form">
          <img src={images.imgLogoMorado} alt="login-form--img" className="login-form--img" />

          <form onSubmit={doLogin} className="form">
            <label htmlFor="email">Correo</label>
            <input value={formData.email} onChange={(e) => setFormData({email: e.target.value})}
              type="text" id="email" placeholder="taddume@example.com" className="input input-email" 
            />

            <label htmlFor="new-password">Contraseña</label>
            <input value={formData.password} onChange={(e) => setFormData({password: e.target.value})}
              type="password" id="new-password" placeholder="*********" className="input input-password" 
            />

            <input 
              type="submit" value="Ingresar" className="primary-button login-button" 
            />
              

            <a className="a-forget" href="/">Olvidé mi contraseña</a>

            <a href="../signup/index.html">
              <button type="button" className="secondary-button signup-button">Registrarse</button>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export { LogIn }