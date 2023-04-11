import { Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "reddit/atoms/authModalAtom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../../firebase/errors";

import { Single_Day } from "next/font/google";
const SignUp: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState("");
  //firebase logic
  const [
    createUserWithEmailAndPassword, // this is a function that we get, to create the user with a particular email id and password
    user, // this is the user that we get
    loading, // loading and error gives progress report of our above mentioned function, if the function is in progress, 'loading' will be true, if there is any error, 'error' will be true
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // we need to check the entered email is of correct format -- that is taken care by type="email" in our input tag
    // there exists also various libraries that check the validty of entered email using regular expressions
    // so here we will only check if the password matches the confirm password
    event.preventDefault();

    if (formError) {
      setFormError("");
    }
    if (signUpForm.confirmPassword !== signUpForm.password) {
      // set error
      setFormError("Passwords do not match");
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
    //To prevent the page from re-loading after submit we can use prevent Default
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // we have to write "React.ChangeEvent<HTMLInputElement>" because it is typescript
    //update form state
    console.log("one change");
    const tar = event.target.name;
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="Enter Email"
        type="email"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="Enter Password"
        type="password"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />

        <Text textAlign="center" color="red" fontSize="10pt">
          {(formError ||(userError && FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]) ) }
        </Text>

      <Button width="100%" height="36px" mt={2} mb={2} type="submit" isLoading={loading}>
        {" "}
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}> Already a redditor ?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          {" "}
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
