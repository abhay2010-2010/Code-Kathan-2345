import {
  Card,
  Image,
  Link,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { Post } from "../../utils/types";
import React from "react";

interface InnovationCardProps {
  isLoaded: boolean;
  data?: Post;
}

const InnovationCard2: React.FC<InnovationCardProps> = ({ isLoaded, data }) => {
  !data &&
    (data = {
      id: 1,
      title: "daniel Kahneman, Nobel Prize-winning psychologist, 1934-2024",
      Description:
        'Three people have been released, but the situation "is not over yet", police in the city of Ede say.',
      source: "BBC.com",
      time: 4,
      articleLink: "https://www.bbc.com/news/world-europe-68698022",
      image1:
        "https://news.google.com/api/attachments/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs=-w280-h168-p-df-rw",
      image2:
        "https://i.zedtranslate.com/newsimage/CC8iK0NnNWhiUzF6VjBrelprMTJUalJIVFJDZkF4ampCU2dLTWdZVk1KUnBHUWs",
      category: "world",
      clicks: 283,
    });
  return (
    <Card>
      {" "}
      <Link fontSize={"20"} fontWeight={"800"}>
        <Skeleton isLoaded={!isLoaded}>
          {" "}
          <Image src={data.image2} />{" "}
        </Skeleton>
        <SkeletonText isLoaded={!isLoaded} width={"fit-content"}>
          {data.title}{" "}
        </SkeletonText>
      </Link>{" "}
      <SkeletonText isLoaded={!isLoaded}>
        {" "}
        <Text>
         {data.Description}
        </Text>{" "}
      </SkeletonText>
      <br />
      <SkeletonText isLoaded={!isLoaded}>
        {" "}
        <Text>
          {data.time} hrs ago | <span style={{ fontWeight: "bold" }}>NEWS</span>{" "}
          England
        </Text>{" "}
      </SkeletonText>
    </Card>
  );
};

export default InnovationCard2;
