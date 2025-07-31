import { Link } from "react-router-dom";
import { Logo } from "./Icons";

const AppLogo = ({ className }) => {
  return (
    <div>
      <Link to="/">
        <Logo className={className} />
      </Link>
    </div>
  );
};

export default AppLogo;
