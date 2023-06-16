const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td className="columna-id">{colaborador.id}</td>
              <td className="columna-nombre">{colaborador.nombre}</td>
              <td className="columna-correo">{colaborador.correo}</td>
              <td className="columna-edad">{colaborador.edad}</td>
              <td className="columna-cargo">{colaborador.cargo}</td>
              <td className="columna-telefono">{colaborador.telefono}</td>
              <td className="columna-acciones">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarColaborador(colaborador.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
