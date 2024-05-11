import React from "react";
import { Link,useNavigate } from "react-router-dom";

function Navbar() {
  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fst-italic" href="#">
            EatPlease
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {(localStorage.getItem("authToken")) ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/"
                  >
                    My Order
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <div className="d-flex">
                  <Link className="btn bg-white text-success mx-1 " to="/login">
                    Login
                  </Link>
                  <Link className="btn bg-white text-success mx-1" to="/signup">
                    Signup
                  </Link>
                </div>
              </div>
            ) : <div>
              <Link className="btn bg-white text-success mx-1" to="/login" onClick={handlelogout}>
                    Log Out
                  </Link>
              <Link className="btn bg-white text-success mx-1" to="/login" onClick={handlelogout}>
                    My Cart
                  </Link>
            </div>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
