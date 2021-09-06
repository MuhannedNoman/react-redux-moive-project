import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signInWithGoogle } from "../../Firebase/googleProvider";
import { logoutHandler } from "../../Redux/Slices/authSlice";
import { resetBookmarks } from "../../Redux/Slices/bookmarksSlice";

function SignIn() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(logoutHandler());
    dispatch(resetBookmarks());
  }
  return !isLoggedIn ? (
    <Button
      colorScheme="black"
      onClick={() => signInWithGoogle(dispatch)}
      leftIcon={<FaGoogle />}
    >
      Sign In
    </Button>
  ) : (
    <Box>
      <Button
        leftIcon={<BiLogOut />}
        onClick={handleSignOut}
        colorScheme="white"
      >
        Sign Out
      </Button>
    </Box>
  );
}

export default SignIn;
