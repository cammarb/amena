import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
type Props = {};

const Error_404 = (props: Props) => {
  return (
    <>
      <Navbar />
      <div>
        <h1>404</h1>
        <h2>Pagina no encontrada.</h2>
        <Link to={"/"}>Regresar al inicio.</Link>
      </div>
      <Footer />
    </>
  );
};

export default Error_404;
