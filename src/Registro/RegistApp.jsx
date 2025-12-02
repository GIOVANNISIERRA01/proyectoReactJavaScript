import React, { useState } from "react";
import "../Styles/Registro.css";

const RegistApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Registro exitoso de ${data.name}`);
        console.log("Usuario guardado:", data);

        // Opcional: limpiar formulario
        setFormData({ name: "", email: "", password: "" });

      } else {
        const errorData = await response.json();
        alert("Error al registrar: " + errorData.error);
      }

    } catch (error) {
      console.error("Error al conectar al backend:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="registro-container">
      <h1>Registro</h1>
      <form className="registro-form" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,30}"
            title="El nombre debe tener entre 3 y 30 letras, sin números ni símbolos."
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Debe ser un correo válido, por ejemplo: usuario@dominio.com"
            required
          />
        </label>
        <br />

        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número."
            required
          />
        </label>
        <br />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistApp;
