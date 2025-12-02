const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ✅ Ruta GET de prueba
router.get("/", (req, res) => {
  res.send("Ruta de usuarios funcionando");
});

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validar datos básicos
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Crear y guardar usuario
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al guardar usuario:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

module.exports = router;