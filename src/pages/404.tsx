import { Link } from "react-router-dom";
type Props = {};

const Error_404 = (props: Props) => {
  return (
    <>
      <div>
        <h1>404</h1>
        <h2>Pagina no encontrada.</h2>
        <Link to={"/"}>Regresar al inicio.</Link>
      </div>
    </>
  );
};

export default Error_404;
