import "./App.css";
import { useState, useRef } from "react";
// import { signUp, useAuth, logout, login } from "./Firebase";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";

function Login(props) {
  const [login, setlogin] = useState(true);
  const [loading, setloading] = useState(false); //button becomes disabled when loading is set to true. Stops the user clicking sign up multiple times.
  const [userIsActive, setUserIsActive] = useState(false);

  async function handleLogin() {
    // setloading(true);
    // try {
    //   await login(emailRef.current.value, passwordRef.current.value);
    // } catch {
    //   alert("Error");
    // }
    // setloading(false);
    // setUserIsActive(true);
    // props.userLoggedIn(true);
  }

  async function handleLogout() {
    // setloading(true);
    // try {
    //   await logout();
    // } catch {
    //   alert("Error!");
    // }
    // setloading(false);
    // setUserIsActive(false);
    // props.userLoggedOut(false);
  }
  console.log("setUserIsActive", setUserIsActive);
  console.log("login", login);
  // console.log("currentUser", currentUser);

  // const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp() {
    // setloading(true);
    // try {
    //   await signUp(emailRef.current.value, passwordRef.current.value);
    // } catch {
    //   alert("Error");
    // }
    // setloading(false);
    // setUserIsActive(true);
    // props.userLoggedIn(true);
  }

  // let display = login ? (
  //   <div>
  //     <h1>Login {currentUser?.email}</h1>
  //     <form>
  //       <label>Email</label>
  //       <input type="email" id="email" required ref={emailRef} />
  //       <br />
  //       <label>Password</label>
  //       <input type="password" id="password" required ref={passwordRef} />
  //       <br />
  //       <button disabled={loading || currentUser} onClick={handleLogin}>
  //         Login
  //       </button>
  //       <button disabled={loading || !currentUser} onClick={handleLogout}>
  //         Logout
  //       </button>
  //     </form>
  //     <br />
  //     <button onClick={(e) => setlogin(false)}>Or Create an Account</button>
  //   </div>
  // ) : (
  //   <div>
  //     <h1>Hello {currentUser?.email}</h1>
  //     <h1>SignUp</h1>
  //     <form>
  //       <label>Email</label>
  //       <input type="email" id="email" required ref={emailRef} />
  //       <br />
  //       <label>Password</label>
  //       <input type="password" id="password" required ref={passwordRef} />
  //       <br />
  //       <button disabled={loading || currentUser} onClick={handleSignUp}>
  //         Create Account
  //       </button>
  //       <button disabled={loading || !currentUser} onClick={handleLogout}>
  //         Logout
  //       </button>
  //     </form>
  //     <br />
  //     <button onClick={(e) => setlogin(true)}>
  //       Or login with existing account
  //     </button>
  //   </div>
  // );

  return (
    <div className="Login">
      {/* {userIsActive ? (
        <div>
          <UserProfile currentUser={currentUser} logoutCb={handleLogout} />
        </div>
      ) : (
        <div>{display}</div>
      )} */}
    </div>
  );
}
export default Login;
