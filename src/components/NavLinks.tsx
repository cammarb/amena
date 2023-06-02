import { Link as FluentLink } from "@fluentui/react-components";
import { Link } from "react-router-dom";

type Props = {
  key: string;
  url: string;
  name: string;
  click?: React.MouseEventHandler;
};

const NavLinks = (props: Props) => {
  return (
    <Link to={props.url} onClick={props.click}>
      {props.name}
    </Link>
  );
};

export default NavLinks;
