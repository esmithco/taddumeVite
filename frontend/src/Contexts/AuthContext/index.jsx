import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RenderRoutes } from "./RenderNavigation";



const AuthContext = createContext();

const AuthData = () => useContext(AuthContext);

const AuthProvider = () => {
	
	const navigate = useNavigate();
	const [user, setUser] = useState({ email: "", isAuthenticated: false })

	const login = (email, password) => {

		const obtenerDatos = async () => {

			const body = { email, password };

			try {
				const response = await fetch("http://localhost:3000/auth/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body)
				});

				if (response.ok) {
					const datosRecibidos = await response.json();
					console.log(datosRecibidos);
					setUser({email: email, isAuthenticated: true})
					navigate("../../Subjects");
				} else {
					console.error("No se pudo obtener los datos");
					navigate("../../Auth/LogIn");
				}

			} catch(error) {
				console.error(error.message);
				navigate("../../Auth/LogIn");
			}
		};

		
		obtenerDatos();
	}

const logout = () => {
	setUser({...user, isAuthenticated: false})
}

useEffect(() => {
	if (!user.isAuthenticated) {
		navigate("/")
	}
}, [])

return (
	<AuthContext.Provider value={{user, login, logout}}>
			<RenderRoutes />
	</AuthContext.Provider>
)
}

export { AuthContext, AuthProvider, AuthData }