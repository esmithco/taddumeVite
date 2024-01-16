import "dotenv/config"
import pkg from "pg";
const { Pool } = pkg;

// Configuración de la conexión a la base de datos
const pool = new Pool();

export { pool }