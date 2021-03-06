import "./App.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  // logoutCb;

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
              {props.user ? (
                <div>
                  {/* <a className="nav-link active" href="/newadd">
                    Post New Add
                  </a> */}
                  <a
                    className="nav-link active"
                    href={`/businesses/${props.user.id}`}
                  >
                    User Profile
                  </a>
                  {/* <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to={`/users/${props.user.id}`}
                  >
                    Profile ({props.user.username})
                  </NavLink> */}
                  {/* <a className="nav-link active" href="/membersonly">
                    Members Only
                  </a> */}
                  <a
                    className="nav-link active"
                    href="/"
                    onClick={props.logoutCb}
                  >
                    Logout
                  </a>
                </div>
              ) : (
                <div>
                  {" "}
                  <a className="nav-link active" href="/login">
                    Login
                  </a>
                  <a className="nav-link active" href="/signup">
                    Sign Up
                  </a>
                </div>
              )}
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
