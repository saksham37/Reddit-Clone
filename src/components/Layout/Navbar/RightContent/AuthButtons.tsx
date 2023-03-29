import { Button } from "@chakra-ui/react";
import React from "react";
import { authModalState } from "reddit/atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import AuthModal from "../../Modal/Auth/AuthModal";
const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
 
  return (
    <>
    <AuthModal/>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width = {{base: "70px", md: "110px"}}
        mr = {2}
        onClick = {()=>{
          setAuthModalState({open:true, view : "login"});
          console.log("here");
        }}
      >
        Log In
      </Button>
    
      <Button
        height = "28px"
        display={{base:"none", sm:"flex"}}
        width = {{base: "70px", md: "110px"}}
        mr = {2}
        onClick = {()=>setAuthModalState({open: true, view: "signup"})}
      > Sign Up </Button>
    </>
  );
};
export default AuthButtons;
// function useDisclosure(): { isOpen: any; onOpen: any; onClose: any; } {
//   throw new Error("Function not implemented.");
// }

