import jwt from "jsonwebtoken";
import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Password is incorrect" });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, "6e550a642f3d5f2d2a364ab96697080f", {
        expiresIn: "7d",
      }),
    });
  }
}

export default new SessionController();
