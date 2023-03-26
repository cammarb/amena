import { Link } from "react-router-dom";

type Props = {
  url: string;
  name: string;
  click: React.MouseEventHandler;
};

const NavLinks = (props: Props) => {
  return (
    <Link to={props.url} onClick={props.click}>
      {props.name}
    </Link>
  );
};

export default NavLinks;
