import { Router } from "express";
import { pool } from "../db.js"
import { authorization } from "../middleware/authorization.js"

const dashboard = Router();

dashboard.get("/", authorization, async (req, res) => {
	try {

			const user = await pool.query("SELECT user_name FROM tbUsers WHERE user_id = $1", 
			[req.user])

			res.json(user.rows[0]);
	} catch (error) {
		console.error(err.message);
    res.status(500).send("Server error");
	}
})

export { dashboard };
