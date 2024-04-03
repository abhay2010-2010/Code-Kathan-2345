import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoSearch } from "react-icons/go";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchCard from "../../components/Search Card/SearchCard";
const SearchbarPage = () => {
  const [text, setText] = useState<string>("");
  const [queryParams] = useSearchParams();
  const [data, setData] = useState([]);
  console.log(data);
  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const getData = (text: string) => {
    axios
      .get(`https://code-kathan-api.vercel.app/posts?q=${text}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(text);
    getData(text);
  };

  useEffect(() => {
    getData(queryParams.get("query"));
  }, []);

  return (
    <div>
      <Navbar />
      <Box w={"88%"} margin={"auto"}>
        <Flex>
          <Input
            w={"94%"}
            size={"lg"}
            borderRadius={"0"}
            placeholder="Search news, topics and more"
            value={text}
            onChange={handleChange}
          />
          <Button
            backgroundColor={"black"}
            h={""}
            borderRadius={"0"}
            onClick={handleClick}
          >
            {<GoSearch color="white" />}
          </Button>
        </Flex>

        <SearchCard data={data} />
      </Box>

      <Footer />
    </div>
  );
};

export default SearchbarPage;
