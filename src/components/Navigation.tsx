import { Link } from "react-router-dom";
import { IconamoonHomeLight } from "./UI/IconamoonHomeLight";

const Navigation = () => {
  const pageName = window.location.pathname.split("/")[1];

  return (
    <nav className="grid place-items-center mt-2">
      <Link className="hover:scale-105 transition-transform duration-75" to="/">
        <IconamoonHomeLight />
      </Link>
      <div className="flex gap-2 mt-2">
        <Link
          to="/lokaty"
          className={`btn ${pageName === "lokaty" ? "btn-active" : ""}`}
        >
          Lokaty
        </Link>
        <Link
          to="/oszczednosci"
          className={`btn ${pageName === "oszczednosci" ? "btn-active" : ""}`}
        >
          Oszczędności
        </Link>
        <Link
          to="/kredyty"
          className={`btn ${pageName === "kredyty" ? "btn-active" : ""}`}
        >
          Kredyty
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
