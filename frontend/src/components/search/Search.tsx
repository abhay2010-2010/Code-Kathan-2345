import { Button, Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    navigate(`/searchbarpage?query=${text}`);
    setText("");
  };
  return (
    <InputGroup>
      <Input
        type="text"
        borderRadius={"0"}
        placeholder="Search"
        value={text}
        onChange={handleChange}
      />
      <Button borderRadius={"0"} bg={"black"} onClick={handleClick}>
        {<CiSearch size={"2rem"} color="white" />}
      </Button>
    </InputGroup>
  );
};
