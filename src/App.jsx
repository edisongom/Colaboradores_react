import React, { useState, useEffect } from 'react';
import Listado from './assets/Listado';
import Formulario from './assets/Formulario';
import Buscador from './assets/Buscador';
import Alert from './assets/Alert';
import { BaseColaboradores } from './assets/BaseColaboradores';

const App = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    setColaboradores(BaseColaboradores);
    setColaboradoresFiltrados(BaseColaboradores);
    setLastId(BaseColaboradores.length);
  }, []);

  const agregarColaborador = (nuevoColaborador) => {
    const id = lastId + 1;
    const colaboradorConId = { ...nuevoColaborador, id };
    setColaboradores([...colaboradores, colaboradorConId]);
    setColaboradoresFiltrados([...colaboradoresFiltrados, colaboradorConId]);
    setLastId(id);
    setMensaje('Colaborador agregado exitosamente');
    setTipoMensaje('success');
  };

  const eliminarColaborador = (id) => {
    const colaboradoresActualizados = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    const colaboradoresFiltradosActualizados = colaboradoresFiltrados.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(colaboradoresActualizados);
    setColaboradoresFiltrados(colaboradoresFiltradosActualizados);
    setMensaje('Colaborador eliminado exitosamente');
    setTipoMensaje('success');
  };

  const buscarColaborador = (textoBusqueda) => {
    const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
      Object.values(colaborador).some((valor) =>
        valor.toString().toLowerCase().includes(textoBusqueda.toLowerCase())
      )
    );

    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  return (
    <div className="container mt-4">
      {mensaje && <Alert mensaje={mensaje} tipo={tipoMensaje} />}
      <div className="row">
        <div className="col-md-3">
          <h4>Agregar Colaborador</h4>
          <Formulario agregarColaborador={agregarColaborador} />
        </div>
        <div className="col-md-9">
          <h4>Listado de Colaboradores</h4>
          <Buscador buscarColaborador={buscarColaborador} />
          <Listado
            colaboradores={colaboradoresFiltrados}
            eliminarColaborador={eliminarColaborador}
          />
        </div>
      </div>
    </div>
  );
  
  
};

export default App;
