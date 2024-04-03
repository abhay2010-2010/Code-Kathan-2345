import { Button, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const Search = () => 

  return (
    <>
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <CiSearch size={"2rem"} />
        </InputRightElement>
        <Input type="text" placeholder="Search" />
      </InputGroup>
    </>
  );
};
