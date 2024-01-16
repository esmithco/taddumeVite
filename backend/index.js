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


// Port
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});