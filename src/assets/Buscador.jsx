import React, { useState } from 'react';

const Buscador = ({ buscarColaborador }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    buscarColaborador(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control input-buscador"
      placeholder="Buscar colaborador"
      value={busqueda}
      onChange={handleChange}
    />
  );
};

export default Buscador;
