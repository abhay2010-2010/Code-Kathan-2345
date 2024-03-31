import { Box, Button, Divider, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import CardCrousal from "./CardCrousal";
import { Post } from "../../utils/types";
function Carousel({ crousalData }: { crousalData: Post[] }) {
  !crousalData &&
    (crousalData = [
      {
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
      },
      {
        id: 508,
        title:
          "Polar ice melt caused by climate change is slowing the Earth�s rotation",
        Description:
          "The melting of polar ice caused by climate change is affecting the rotation of the Earth. The redistribution of the now liquid frozen masses...",
        source: "EL PA�S USA",
        time: 6,
        articleLink:
          "https://english.elpais.com/climate/2024-03-27/polar-ice-melt-caused-by-climate-change-is-slowing-the-earths-rotation.html",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNWZjbUpIV0VReVkwWldTVkpLVFJDb0FSaXJBaWdCTWdZaE1JUXRuUWM=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNWZjbUpIV0VReVkwWldTVkpLVFJDb0FSaXJBaWdCTWdZaE1JUXRuUWM",
        category: "earth",
        clicks: 197,
      },
      {
        id: 509,
        title: "Antarctica, Earth's largest refrigerator, is defrosting",
        Description:
          "The deadliest hurricane ever to hit America made landfall over Galveston, Texas, a barrier island in the Gulf of Mexico, on September 8th...",
        source: "The Economist",
        time: 4,
        articleLink:
          "https://economist.com/interactive/science-and-technology/2024/03/27/antarctica-earths-largest-refrigerator-is-defrosting",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNXpjRU00U0hnMFFWZGlUa2xRVFJDb0FSaXNBaWdCTWdZQllJZ3hUUU0=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXpjRU00U0hnMFFWZGlUa2xRVFJDb0FSaXNBaWdCTWdZQllJZ3hUUU0",
        category: "earth",
        clicks: 316,
      },
      {
        id: 510,
        title: "Earth's Rotation Is Changing Because of Melting Polar Ice",
        Description:
          "Melting ice at the poles due to climate change may impact the Earth's spin, altering our global clock. According to a new paper in...",
        source: "Newsweek",
        time: 5,
        articleLink:
          "https://www.newsweek.com/earth-rotation-changing-polar-ice-melting-leap-second-1883768",
        image1:
          "https://news.google.com/api/attachments/CC8iL0NnNHpOMmh4VVRremN6a3dkV1ZZVFJDM0FSaVRBaWdCTWdrUlVwSklKbWM5S2dJ=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNHpOMmh4VVRremN6a3dkV1ZZVFJDM0FSaVRBaWdCTWdrUlVwSklKbWM5S2dJ",
        category: "earth",
        clicks: 116,
      },
      {
        id: 511,
        title:
          "Discovering the Traces of Earth's Oldest Megathrust Earthquakes",
        Description:
          "A recent study has uncovered potential evidence of the planet's oldest recorded megathrust earthquakes. These geological events are...",
        source: "yTech",
        time: 3,
        articleLink:
          "https://ytech.news/en/discovering-the-traces-of-earths-oldest-megathrust-earthquakes/",
        image1:
          "https://news.google.com/api/attachments/CC8iL0NnNXlkR0Z2TlhGSFlVbFVZVWh1VFJDcUFSaXBBaWdCTWdtQk1JcXNsYVNpVHdF=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNXlkR0Z2TlhGSFlVbFVZVWh1VFJDcUFSaXBBaWdCTWdtQk1JcXNsYVNpVHdF",
        category: "earth",
        clicks: 279,
      },
      {
        id: 512,
        title:
          "Courts, not the Minnesota Legislature, should rule on Red Lake, White Earth lands",
        Description:
          "Mille Lacs case is an example of treaty land issues correctly decided by courts, not politicians.",
        source: "Star Tribune",
        time: 3,
        articleLink:
          "https://www.startribune.com/red-lake-legislature-tribal-land-mille-lacs-dennis-anderson/600355008/",
        image1:
          "https://news.google.com/api/attachments/CC8iJ0NnNW1ja1JVY3pZd1FXcEllVTVtVFJDM0FSaVRBaWdCTWdNMUFnaw=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iJ0NnNW1ja1JVY3pZd1FXcEllVTVtVFJDM0FSaVRBaWdCTWdNMUFnaw",
        category: "earth",
        clicks: 191,
      },
      {
        id: 513,
        title:
          "Scientists discovered terrifying sounds from below the Earth after digging the deepest hole ever",
        Description:
          "The hole's depth is calculated to be around 40230 feet, which is roughly 12262 meters into the Earth's surface.",
        source: "GOOD",
        time: 5,
        articleLink:
          "https://www.good.is/scientists-discovered-terrifying-sounds-from-below-the-earth-after-digging-the-deepest-hole-ever",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNUpRWEYzY0hCRmJHTkxWbmRNVFJDakFSaTJBaWdCTWdZQkZZakxKUVU=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNUpRWEYzY0hCRmJHTkxWbmRNVFJDakFSaTJBaWdCTWdZQkZZakxKUVU",
        category: "earth",
        clicks: 446,
      },
      {
        id: 514,
        title:
          "Strongest solar storm since 2017 hits Earth but leaves aurora chasers in the dark",
        Description:
          "Earth just experienced the strongest solar storm since September 2017. It opened a crack in our planet's magnetosphere but failed to spark...",
        source: "Space.com",
        time: 2,
        articleLink:
          "https://www.space.com/strongest-solar-storm-since-2017-hits-earth-march-24",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNVRZMlJRVjJsNmFFWnBkemxWVFJDb0FSaXNBaWdCTWdhZEFZb3VrUWs=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVRZMlJRVjJsNmFFWnBkemxWVFJDb0FSaXNBaWdCTWdhZEFZb3VrUWs",
        category: "earth",
        clicks: 327,
      },
      {
        id: 515,
        title:
          "Opinion | Let's Call Our Present Moment on Earth What It Is: Obscene",
        Description:
          "It is springtime, and I want to turn to thoughts of love. In my case, love of this world, love of nature, love of our life in and as part of...",
        source: "The New York Times",
        time: 7,
        articleLink:
          "https://www.nytimes.com/2024/03/23/opinion/oil-gas-plastic-future.html",
        image1:
          "https://news.google.com/api/attachments/CC8iL0NnNTJOalZCWDJ3d2F6Wm1lRXRwVFJEaEFSamhBU2dCTWdtSllJUXhKYVp6RkFF=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iL0NnNTJOalZCWDJ3d2F6Wm1lRXRwVFJEaEFSamhBU2dCTWdtSllJUXhKYVp6RkFF",
        category: "earth",
        clicks: 467,
      },
    ]);
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
          {crousalData.map((data) => {
            // console.log(data);

            return (
              <CardCrousal isLoaded={isLoaded} data={data} key={data.title} />
            );
          })}

          {/* <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} />
          <CardCrousal isLoaded={isLoaded} /> */}
        </Slider>
      </Box>
    </Box>
  );
}

export default Carousel;
