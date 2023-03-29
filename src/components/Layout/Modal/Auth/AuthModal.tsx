import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "reddit/atoms/authModalAtom";

const AuthModal: React.FC = () => {
  const [modalState, setModalState]  = useRecoilState(authModalState);
  
  const handleClose = ()=>{
    setModalState(prev => ({
      ...prev,
      open: false,
    }))
  }
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
<Modal isOpen={modalState.open} onClose={handleClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      Modal Body
    </ModalBody>
  </ModalContent>
</Modal>
    </>
  )
};
export default AuthModal;
// function useDisclosure(): { isOpen: any; onOpen: any; onClose: any; } {
//   throw new Error("Function not implemented.");
// }

