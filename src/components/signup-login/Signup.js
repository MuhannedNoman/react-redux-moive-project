import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../features/auth/authSlice";
import { auth } from "../../firebase/firebase";
import "./LogoutButton.css";
import "./Buttons.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector((state) => state);

  console.log("authState: ", authState);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return subscribe;
  }, []);

  console.log(currentUser?.email);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function singupAuth() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log("authUser: ", authUser);
        dispatch(signup(authUser));
        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  // submit form to firebase
  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");

      return;
    }
    singupAuth();
  }

  console.log(error);

  return (
    <div
      style={{
        textAlign: "center",
        // color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {currentUser ? (
        <div>
          <h1 style={{ color: "white" }}>
            You are already logged in as {currentUser.email}
          </h1>
          <button
            type="button"
            onClick={() => auth.signOut()}
            className="logout"
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: "white" }}>Create an account</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              margin: "auto",
            }}
          >
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
              style={{
                margin: "10px 0",
                padding: "5px",
                borderRadius: "5px",
              }}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                padding: "5px",
                borderRadius: "5px",
              }}
            />
            <input
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={{
                margin: "10px 0",
                padding: "5px",
                borderRadius: "5px",
              }}
            />
            <button type="submit" className="fill">
              SignUp
            </button>
          </div>
          <p style={{ color: "white" }}>
            Have an account? <Link to="/login">Login</Link>
          </p>
          {/* {error && <p>{error}</p>} */}
          {/* user email: {currentUser?.email} */}
        </form>
      )}
    </div>
  );
}

export default Signup;
