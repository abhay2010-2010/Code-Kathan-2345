import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/Debounce";
import { useData } from "../../utils/dataContext/dataContext";

interface queryParams {
  q?: string;
  _limit?: number;
  _page?: number;
}

export const Search = () => {
  const { getPosts, totalPosts } = useData();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");

  const debouncedQuery = useDebounce(query, 1000);

  const setUrl = () => {
    setParams((prev) => {
      let obj: queryParams = {};

      const searchParams = new URLSearchParams(prev.toString());
      for (const [key, value] of searchParams.entries()) {
        obj[key] = value;
      }

      if (query) {
        obj.q = query;
      } else {
        delete obj.q;
      }
      return obj;
    });
  };

  useEffect(() => {
    setUrl();
    getPosts();
  }, [totalPosts, debouncedQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  // console.log(posts, baseUrl, totalPosts);

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
