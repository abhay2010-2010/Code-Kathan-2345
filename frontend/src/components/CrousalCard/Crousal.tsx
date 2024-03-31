import { Box, Button, Divider, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import CardCrousal from "./CardCrousal";
function Carousel() {
  const [isLoaded] = useState(true);
  let sliderRef = useRef<any>(null);
  const next = () => {
    sliderRef.current.slickNext();
    console.log("pre");
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  var settings = {
    accessibility: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box justifyContent={"center"} m={0} p={2} backgroundColor={"#141618"}>
      <Divider height={"2px"} backgroundColor={"white"} mt={5} />

      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
          gap: "20px",
        }}
      >
        <Text color={"white"} fontSize={"20px"}>
          Watch
        </Text>
        <Box display={"flex"} gap={4}>
          <Button className="button" onClick={previous}>
            <GrPrevious />
          </Button>
          <Button className="button" onClick={next}>
            <GrNext />
          </Button>
        </Box>
      </Box>
      <Box m={2}>
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...settings}
        >
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
        </Slider>
      </Box>
      
    </Box>
  );
}

export default Carousel;
