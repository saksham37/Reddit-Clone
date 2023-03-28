import { PhoneIcon, CheckIcon, SearchIcon } from "@chakra-ui/icons";
// import { SearchIcon } from "@chakra-ui/icons/dist/Search";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1} mr={2} align="center">
      {/* //using the flexGrow property- this component will occupy 100% width of the parent component */}
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" mb={1} />}
        />
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{ bg: "white", border: "1px solid blue.500" }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
        />
        {/* _placeholder and _hover are actually pseudo classes here  */}
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
