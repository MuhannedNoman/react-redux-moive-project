import React, { useState } from "react";
// import { logout } from "../../features/auth/authSlice";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase";

function Logout() {
  const [error, setError] = useState("");

  const history = useHistory();

  async function handleLogout() {
    try {
      await auth.signOut();
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  }

  console.log("error from logout", error);

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
