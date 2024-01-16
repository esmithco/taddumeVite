import jwt from "jsonwebtoken";
import "dotenv/config";

const authorization = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).send("Not Authorized");
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    // Store the user information extracted from the token in the request object

    req.user = payload.user;

    next(); 
  } catch (err) {
    console.error(err.message);
    return res.status(403).send("Not Authorized");
  }
};

export { authorization };
