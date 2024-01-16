import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Contexts/AuthContext";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider />
    </BrowserRouter>
  );
}

export { App }