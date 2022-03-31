import "./App.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="NavBar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          Farm Jobs
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="/">
              Home
            </a>
            <a class="nav-link active" href="/jobs">
              Jobs
            </a>
            <a class="nav-link active" href="/contractors">
              Contractors
            </a>
            <a class="nav-link active" href="/leasing">
              Lease Equipment
            </a>
          </div>

          <div class="navbar-nav ml-auto">
            <a class="nav-link active" href="/login">
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* <nav className="mainBar">
        <Link to="/">Home</Link> |<Link to="/jobs">Find Jobs</Link> |
        <Link to="/contractors">Find Contractors</Link> |
      </nav>
      {!props.userActive ? (
        <nav className="userBar">
          <Link to="/login">Login</Link>
        </nav>
      ) : (
        <nav className="userBar">
          <Link to="/">Logout</Link>
        </nav>
      )} */}
    </div>
  );
}

export default NavBar;
