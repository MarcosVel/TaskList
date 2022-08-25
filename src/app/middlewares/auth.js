import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "../../config/auth";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token does not exists." });
  }

  // separating Bearer from token and eliminating the word Bearer
  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // creating userId in update req
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token is invalid." });
  }
};
