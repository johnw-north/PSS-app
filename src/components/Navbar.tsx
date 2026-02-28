import { Link } from "react-router";



function Navbar() {

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
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
            <h1 className="font-gummy text-3xl text-">Peach Stone Studios.</h1>
            <div className="badge badge-xs badge-primary">Home</div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li className="sm:hidden">
              <label className="input input-sm">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </li>
            <li>
              <Link to="/" onClick={(e) => e.currentTarget.blur()}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/market" onClick={(e) => e.currentTarget.blur()}>
                Market
              </Link>
            </li>
            <li>
              <Link to="/dollhouse" onClick={(e) => e.currentTarget.blur()}>
                Doll House
              </Link>
            </li>
            <li>
              <Link to="/guide" onClick={(e) => e.currentTarget.blur()}>
                Guide
              </Link>
            </li>
            <li>
              <Link to="/ledger" onClick={(e) => e.currentTarget.blur()}>
                COA Ledger
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden sm:flex">
        <div className="join">
          <input
            className="input join-item rounded-l-lg"
            placeholder="Search"
          />
          <button className="btn join-item bg-accent rounded-r-lg">
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
                strokeWidth="3"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
        </div>
      </div>
      <div className="navbar-end">
        <Link to="/favourite" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="pink"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-[1.2em]">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </Link>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="yellow"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-info indicator-item">
                12
              </span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a>Message</a>
            </li>
            <li>
              <a>Favourite on sale</a>
            </li>
            <li>
              <a>New vendor release</a>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end mx-3">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar rounded-2xl">
            <img
              alt="Tailwind CSS Navbar component"
              src="src/assets/Avatar.png"
            />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" onClick={(e) => e.currentTarget.blur()}>
                Profile
                <span className="badge badge-sm badge-accent">
                  Member
                </span>
              </Link>
            </li>
            <li>
              <Link to="/store" onClick={(e) => e.currentTarget.blur()}>
                My Store
                <span className="badge badge-sm badge-success">Verified</span>
              </Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
