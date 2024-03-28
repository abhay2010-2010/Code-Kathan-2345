import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

export const Search = () => {
  return (
    <InputGroup>
      <InputRightElement pointerEvents="none">
        <CiSearch size={"2rem"} />
      </InputRightElement>
      <Input type="text" placeholder="Search" />
    </InputGroup>
  );
};
