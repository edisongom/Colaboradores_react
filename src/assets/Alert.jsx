const Alert = ({ mensaje, tipo }) => {
  const alertClass = `alert ${tipo === 'error' ? 'alert-danger' : 'alert-success'}`;

  return <div className={alertClass}>{mensaje}</div>;
};

export default Alert;
