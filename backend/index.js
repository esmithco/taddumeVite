import { router } from "./routes/jwtAuth.js";
import { dashboard } from "./routes/dashboard.js";
import "dotenv/config";
import { pool } from "./db.js"
import express from "express";
import cors from "cors";


const app = express();

// middleware
app.use(express.json())
app.use(cors());



// Routes
app.use("/auth", router);

//dashboard
app.use("/dashboard", dashboard);

// app.get("/api/bd", async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query("SELECT * FROM tbUsers");
//     client.release(); 
//     res.send(JSON.stringify(result.rows));
//   } catch (error) {
//     console.error("Error al obtener usuarios", error);
//     res.status(500).send("Error del servidor");
//   }
// });

// app.get("/api/error", async (req, res) => {
//     res.status(404).send("Ruta erronea");
// });

// app.get("/api/users/:name", async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query("SELECT * FROM tbUsers");
//     client.release();
//     const name = req.params.name;
//     const data = result.rows.filter(user => user.name === name);


//     if (data.length === 0) {
//       return res.status(404).send("Sin data");
//     } 

//     res.send(data);

//   } catch (error) {
//     console.error("Error al obtener usuarios");
//   }
// });


// Port
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});