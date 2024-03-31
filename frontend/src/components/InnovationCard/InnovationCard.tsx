import {
  Card,
  Image,
  Link,
  Skeleton,
  SkeletonText,
  Text
} from "@chakra-ui/react";



const InnovationCard = ({ isLoaded }: { isLoaded: boolean }) => {
  console.log(isLoaded);
  return (
    <Card>
        {" "}
        <Link fontSize={"20"} fontWeight={"800"}>
          <Skeleton isLoaded={!isLoaded}>
            
            <Image src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/A4B7/production/_132976124_terry2.jpg.webp" />{" "}
          </Skeleton>
          <SkeletonText isLoaded={!isLoaded}>      Why are electric car fires so hard to deal with?  </SkeletonText>
        </Link>{" "}
      <SkeletonText isLoaded={!isLoaded}>
        {" "}
        <Text>
          Dealing with an electric car fire takes up to 10 times longer
        </Text>{" "}
      </SkeletonText>
      <br />
      <SkeletonText isLoaded={!isLoaded}>
        {" "}
        <Text>
          4 hrs ago | <span style={{ fontWeight: "bold" }}>NEWS</span> England
        </Text>{" "}
      </SkeletonText>
    </Card>
  );
};

export default InnovationCard;
