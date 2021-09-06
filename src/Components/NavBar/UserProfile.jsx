import { HStack, Image, Text } from "@chakra-ui/react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "../../Firebase/Firebase";
import { setUserId } from "../../Redux/Slices/authSlice";
import { userBookmarks } from "../../Redux/Slices/bookmarksSlice";

function UserProfile() {
  const dispatch = useDispatch();
  const [url, setURL] = useState("");
  const user = auth.currentUser;
  const photo = user.photoURL;

  useEffect(() => {
    if (user) postUser();
  }, [user]);
  async function postUser() {
    dispatch(setUserId(user.uid));
    const userRef = doc(db, "Users", user.uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) dispatch(userBookmarks(docSnap.data().bookmarks));

    if (!docSnap.exists()) {
      await setDoc(
        doc(db, "Users", user.uid),

        {
          name: user.displayName,
          email: user.email,
          bookmarks: [],
        },
        { merge: true }
      );
    }
  }

  useEffect(() => {
    fetch(photo)
      .then((res) => setURL(res.url))
      .catch((err) => {
        err;
      });
  }, [photo]);

  return (
    <HStack spacing="4">
      <Text> {user.displayName} </Text>
      <Image boxSize="3.5rem" rounded borderRadius="full" src={url} />
    </HStack>
  );
}

export default UserProfile;
