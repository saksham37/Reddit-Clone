import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Text
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "reddit/atoms/authModalAtom";
import Authinputs from "./Authinputs";
import OAuthButtons from "./OAuthButtons";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center"> 
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Signup"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb = {6}
          >
            <Flex
             direction="column"
             align = "center"
             justify = "center"
             width = "70%"
            >
                  <OAuthButtons/>
                  <Text color="gray.500" fontWeight={700}> OR </Text>
                  <Authinputs/>
                  {/* <ResetPassword/> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
// function useDisclosure(): { isOpen: any; onOpen: any; onClose: any; } {
//   throw new Error("Function not implemented.");
// }
