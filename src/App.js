import "./App.css";
import Search from "./search";
import Home from "./Home";
import Login from "./login";
import Register from "./register";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);
  const [uname, setUname] = useState("");
  const navigate = useNavigate();
  const userLogin = (name) => {
    setStatus(!status);
    setUname(name);
  };

  const logout = () => {
    setStatus(!status);
    setUname("");
    alert("Signed Out")
    navigate("/");
  };

  return (
    <div id="main">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <FontAwesomeIcon icon={faBuilding} /> HWorld
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {status && (
            <div className="mx-auto text-info user">Welcome {uname}</div>
          )}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {status && (
                <li className="nav-item">
                  <Link className="nav-link" to="/search">
                    HSearch
                  </Link>
                </li>
              )}
              {!status && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login/Register
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <button
                  className="bg-transparent nav-link inbtn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  ContactUs
                </button>
              </li>
              {status && (
                <li className="nav-item">
                  <button
                    onClick={logout}
                    className="bg-transparent nav-link inbtn"
                  >
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-0">
                <div className="col-sm-1"></div>
                <div className="col-sm-4">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="col-sm-7">
                  Hworld Works Private Limited Janardhana Hills, Lumbini Avenue,
                  Gachibowli, Hyderabad-500032.
                </div>
              </div>
              <div className="row g-0 mt-4">
                <div className="col-sm-1"></div>
                <div className="col-sm-4">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="col-sm-7">9390043946</div>
              </div>
              <div className="row g-0 mt-4">
                <div className="col-sm-1"></div>
                <div className="col-sm-4">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="col-sm-7">HWorld@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/login" element={<Login log={userLogin} />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
