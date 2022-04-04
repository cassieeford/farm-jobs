import "./App.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="NavBar">
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="navbar-light bg-white p-4">
            <h4 className="text-white">Farm Jobs</h4>
            {/* <span className="text-muted">Toggleable via the navbar brand.</span> */}

            <div className="navbar-nav">
              <a className="nav-link active" href="/">
                Home
              </a>
              <a className="nav-link active" href="/jobs">
                Jobs
              </a>
              <a className="nav-link active" href="/contractors">
                Contractors
              </a>
              <a className="nav-link active" href="/leasing">
                Lease Equipment
              </a>
            </div>

            <div className="navbar-nav ml-auto">
              <a className="nav-link active" href="/login">
                Login
              </a>
              <a className="nav-link active" href="/signup">
                Sign Up
              </a>
              <a className="nav-link active" href="/newadd">
                Post New Add
              </a>
              <a className="nav-link active" href="/userprofile">
                User Profile
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-light bg-white">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
