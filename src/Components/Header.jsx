import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/orders"}>Orders</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            Auth Integration
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span> {user.email} </span>
              <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
            </>
          ) : (
            <NavLink className={"btn"} to={"/login"}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
