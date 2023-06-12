import React, { useState } from 'react';

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const nuevoColaborador = {
      id: new Date().getTime().toString(),
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    agregarColaborador(nuevoColaborador);

    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
    setError('');
  };


};

export default Formulario;
