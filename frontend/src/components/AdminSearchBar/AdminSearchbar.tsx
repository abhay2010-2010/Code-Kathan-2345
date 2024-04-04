import { useSearchParams } from "react-router-dom";
import { useData } from "../../utils/dataContext/dataContext";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/Debounce";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../../utils/authContext/authContext";

export const AdminSearch = () => {
  const { getPosts } = useData();
  const { getUsers } = useAuth();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");

  const debouncedQuery = useDebounce(query, 1000);

  const setUrl = () => {
    let obj = new URLSearchParams();

    const searchParams = new URLSearchParams(params.toString());
    for (const [key, value] of searchParams.entries()) {
      obj.append(key, value);
    }

    if (query) {
      obj.set("q", query);
    } else {
      obj.delete("q");
    }

    setParams(obj);
  };

  useEffect(() => {
    setUrl();
    getPosts();
    getUsers();
  }, [debouncedQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <>
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <CiSearch size={"2rem"} />
        </InputRightElement>
        <Input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
      </InputGroup>
    </>
  );
};
