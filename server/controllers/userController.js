const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
  registerUser: async (req, res) => {
    try {
      const { name, email, password, telephone } = req.body;
      const user = await Users.findOne({ email: email });

      // check if user already exists
      if (user) return res.status(400).json({ msg: "El usuario ya existe" });

      // encrypt password and save user
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        name: name,
        email: email,
        password: passwordHash,
        telephone: telephone,
      });
      await newUser.save();
      res.json({ msg: "Usuario registrado con éxito" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email: email });
      // check if user exists
      if (!user)
        return res.status(400).json({
          msg: "Correo incorrecto",
        });
      // check if password is correct
      if (!(await bcrypt.compare(password, user.password)))
        return res.status(400).json({
          msg: "Contraseña incorrecta",
        });

      // create token when login with userID and userEmail
      const payload = { id: user._id, email: user.email };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "15d",
      });
      res.json({ msg: "Inicio de sesión correcto", token: token });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  verifyToken: (req, res) => {
    try {
      const token = req.header("Authorization");
      if (!token) return res.send(false);

      // verify token
      jwt.verify(token, process.env.TOKEN_SECRET, async (err, verifiedUser) => {
        if (err) return res.send(false);

        const user = await Users.findById(verifiedUser.id);
        if (!user) return res.send(false);

        return res.send(true);
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = userController;
