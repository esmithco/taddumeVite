import { Router } from "express";
import { pool } from "../db.js"
import bcrypt from "bcrypt";
import { jwtGenerator } from "../utils/jwtGenerator.js";
import validInfo from "../middleware/validInfo.js";
import { authorization } from "../middleware/authorization.js"

//
const router = Router();

// sign up route
router.post("/register", validInfo, async(req, res) => {
	try {
			// 1. destructure the req.body (name, email, password)
			const { name, email, password } = req.body;

			// 2. check if user exist (if exist then throw error)
			const user = await pool.query("SELECT user_name FROM tbusers WHERE user_email = $1",
			 [email]);

			if(user.rows.length !== 0) {
				return res.status(401).send("User already exist");
			}

			// 3. Bcrypt the user password
			const saltRound = 10;
			const salt = await bcrypt.genSalt(saltRound);

			const bcryptPassword = await bcrypt.hash(password, salt);

			// 4. enter the new user inside our database
			const newUser = await pool.query("INSERT INTO tbUsers (user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *", 
			[name, email, bcryptPassword]);

			// 5. generating our jwt token
			const token = jwtGenerator(newUser.rows[0].user_id);

			res.json({ token });

	} catch (err) {
			console.error(err.message);
			res.status(500).send("server Error");
	}
})

//login route
router.post("/login", validInfo, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT user_id, user_password FROM tbUsers WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length === 0) {
      return res.status(401).send("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).send("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/is-verify", authorization, async (req, res) => {
	try {
		res.send(true);
	} catch (error) {
		console.error(err.message);
    res.status(500).send("Server error");
	}
})

export { router };