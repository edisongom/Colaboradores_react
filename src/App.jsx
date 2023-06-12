import React, { useState, useEffect } from 'react';
import Listado from './assets/Listado';
import Formulario from './assets/Formulario';
import Buscador from './assets/Buscador';
import Alert from './assets/Alert';
import { BaseColaboradores } from './assets/BaseColaboradores';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [lastId, setLastId] = useState(BaseColaboradores.length);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    const id = lastId + 1;
    const colaboradorConId = { ...nuevoColaborador, id };
    setColaboradores([...colaboradores, colaboradorConId]);
    setLastId(id);
    mostrarMensaje('Colaborador agregado exitosamente', 'success');
  };

  const eliminarColaborador = (id) => {
    const colaboradoresActualizados = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(colaboradoresActualizados);
  };

  const buscarColaboradores = (termino) => {
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(termino.toLowerCase()) ||
        colaborador.edad.toLowerCase().includes(termino.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(termino.toLowerCase()) ||
        colaborador.telefono.toLowerCase().includes(termino.toLowerCase())
      );
    });
    setColaboradores(colaboradoresFiltrados);
  };

  const mostrarMensaje = (mensaje, tipo) => {
    setMensaje(mensaje);
    setTipoMensaje(tipo);
    setTimeout(() => {
      setMensaje('');
      setTipoMensaje('');
    }, 3000);
  };

  return (
    <div className="container">
      <h1>Listado de Colaboradores</h1>
      {mensaje && <Alert mensaje={mensaje} tipo={tipoMensaje} />}
      <div className="row">
        <div className="col-md-4">
          <Formulario agregarColaborador={agregarColaborador} />
        </div>
        <div className="col-md-8">
          <Buscador buscarColaboradores={buscarColaboradores} />
          <Listado
            colaboradores={colaboradores}
            eliminarColaborador={eliminarColaborador}
          />
        </div>
      </div>
    </div>
  );
};

export default App;