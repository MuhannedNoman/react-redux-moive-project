import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";

import { useDispatch } from "react-redux";

import { signInWithGoogle } from "../../Firebase/googleProvider";

function AlertModal() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <>
      {
        <Link as="h3" cursor="pointer" onClick={() => setIsOpen(true)}>
          Bookmarks
        </Link>
      }

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Please Sign In First
            </AlertDialogHeader>

            <AlertDialogBody>
              Sign in now to view your bookmarks!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Later
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  signInWithGoogle(dispatch);
                  onClose;
                }}
                ml={3}
              >
                Sign In
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertModal;
