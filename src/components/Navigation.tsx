import { Link } from "react-router-dom";
import { IconamoonHomeLight } from "./UI/IconamoonHomeLight";

const Navigation = () => {
  return (
    <nav className="grid place-items-center mt-2">
      <Link className="hover:scale-105 transition-transform duration-75" to="/">
        <IconamoonHomeLight />
      </Link>
      <div className="flex gap-2 mt-2">
        <Link to="/lokaty" className="btn">
          Lokaty
        </Link>
        <Link to="/oszczednosci" className="btn">
          Oszczędności
        </Link>
        <Link to="/kredyty" className="btn">
          Kredyty
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
