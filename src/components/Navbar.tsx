import { Link } from "react-router";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();

  // Map your paths to the titles you want to show
  const routeTitles: { [key: string]: string } = {
    "/": "Home",
    "/products": "Products",
    "/aboutus": "About Us",
  };

  // Get the title based on the current pathname,
  // or set a default if the path isn't in the map
  const currentTitle = routeTitles[location.pathname] || "My App";

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
            <h1 className="font-gummy text-3xl text-">Peach Stone Studio.</h1>
            <div className="badge badge-xs badge-primary">{currentTitle}</div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/" onClick={(e) => e.currentTarget.blur()}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={(e) => e.currentTarget.blur()}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={(e) => e.currentTarget.blur()}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
};

export default Navbar;
