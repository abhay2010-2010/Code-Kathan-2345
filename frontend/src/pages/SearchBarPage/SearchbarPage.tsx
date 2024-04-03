import {
  Box,
  Button,
  Center,
  CircularProgress,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoSearch } from "react-icons/go";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchCard from "../../components/Search Card/SearchCard";
import { baseUrl } from "../../utils/baseUrl";
const SearchbarPage = () => {
  const [loading, isLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [queryParams] = useSearchParams();
  const [text, setText] = useState<string>(queryParams.get("query") || "");
  const [data, setData] = useState<[]>([]);
  const[totalPage,setTotalPage]=useState<number>(1);
  console.log(data.length)
  
  

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  console.log(baseUrl);

  const getData = (text: string,) => {
    isLoading(false);
    axios
      .get(`${baseUrl}/posts?q=${text}&_limit=5&_page=${page}`)
      .then((res) => {
        setData(res.data);
        const { "x-total-count": total } = res.headers;
        setTotalPage(Math.ceil(total/5));
        isLoading(true);
      })
      .catch((err) => {
        console.log(err);
        isLoading(false);
      });
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(text);
    getData(text);
    setPage(1);
  };

  useEffect(() => {
    getData(queryParams.get("query") || "");
  }, [page]);

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

        {!loading ? (
          <Center>
            {" "}
            <CircularProgress isIndeterminate color="green.300" />
          </Center>
        ) : (
          data.map((el,index) => {
            return <SearchCard data={el} key={index} />;
          })
        )}
      </Box>
      <Center>
        <Button bg={'black'} color={'white'} onClick={()=>setPage(prev=>prev-1)} isDisabled={page===1} >Prev</Button>
             <Text fontWeight={'800'}>{page}</Text>
        <Button bg={'black'} color={'white'} onClick={()=>setPage(prev=>prev+1)} isDisabled={page===totalPage}>Next</Button>{" "}
      </Center>
      <Footer />
    </div>
  );
};

export default SearchbarPage;
