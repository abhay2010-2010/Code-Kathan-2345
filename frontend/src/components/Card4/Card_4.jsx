import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

const Card_4 = () => {
  const [isLoading, setIsLoading] = useState(false); // Initialize with true to show the skeleton initially

  const handleToggle = () => {
    setIsLoading(!isLoading); // Toggles the loading state
  };

  return (
    <>
      <Card w={"20%"} bg={"black"} borderRadius={"5px"}>
        <Skeleton isLoaded={!isLoading}>
          {" "}
          <Image src="https://ichef.bbci.co.uk/images/ic/480x270/p0hm3g2p.jpg.webp" />{" "}
        </Skeleton>
        <Heading color={"#e3e2e5"} fontSize={"20"}>
          Pust: An ancient festival to <br />
          chase away winter
        </Heading>{" "}
        <br />
        <Text color={"#e3e2e5"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          molestias ullam quis asperiores aliquam autem?
        </Text>{" "}
        <br />
      </Card>

      <div>
        <Button onClick={handleToggle}>Toggle</Button>
      </div>
    </>
  );
};

export default Card_4;
