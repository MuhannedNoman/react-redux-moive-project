import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { signInWithGoogle } from "../Firebase/googleProvider";

function AlertModal({ size }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <>
      <BsBookmarkPlus
        size={size}
        cursor="pointer"
        onClick={() => setIsOpen(true)}
      />

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
              Sign in now to bookmark your favourite movies!
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
