import { Box, Button, Divider, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import CardCrousal from "./CardCrousal";
import { Post } from "../../utils/types";

interface Props {
  data?: Post[];
}

function Carousel({ data }: Props) {
  !data &&
    (data = [
      {
        id: 358,
        title: "CBP issues travel alert for the total solar eclipse",
        Description:
          "Just about everyone in the path of totality say they're ready for the total solar eclipse and that includes agents with U.S. Customs and...",
        source: "WesternSlopeNow",
        time: 4,
        articleLink:
          "https://www.westernslopenow.com/news/national-news/cbp-issues-travel-alert-for-the-total-solar-eclipse/",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNU1UMjV6VW05MlNIRm9lbWRrVFJDb0FSaXNBaWdCTWdhQlVKQWlxd1k=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNU1UMjV6VW05MlNIRm9lbWRrVFJDb0FSaXNBaWdCTWdhQlVKQWlxd1k",
        category: "travel",
        clicks: 250,
      },
      {
        id: 359,
        title:
          "Russia's upgraded cruise missiles travel a shorter distance than their predecessors -- but pack twice the punch",
        Description:
          "Russia's latest air-launched cruise missiles may travel less than half the distance of their predecessors, but they pack twice the punch.",
        source: "New York Post",
        time: 4,
        articleLink:
          "https://nypost.com/2024/03/30/world-news/russias-upgraded-cruise-missiles-travel-a-shorter-distance-than-their-predecessors-but-pack-twice-the-punch/",
        image1:
          "https://news.google.com/api/attachments/CC8iMkNnNXdSRXhWVm5GbVJERlJkMFJ4VFJDM0FSaVRBaWdCTWdzQk1JampJbVl0cDNvTFJR=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iMkNnNXdSRXhWVm5GbVJERlJkMFJ4VFJDM0FSaVRBaWdCTWdzQk1JampJbVl0cDNvTFJR",
        category: "travel",
        clicks: 279,
      },
      {
        id: 360,
        title:
          "Georgians still looking to travel to see total solar eclipse are going to have to pay",
        Description:
          "Georgia will only see a partial eclipse on Apr. 8, so if you want to be in the path of totality, you will have to travel -- and it won't be...",
        source: "WSB Atlanta",
        time: 3,
        articleLink:
          "https://www.wsbtv.com/news/local/atlanta/georgians-still-looking-travel-see-total-solar-eclipse-are-going-have-pay/DGEONFTQHJFCDJJLBKOKESBRTQ/",
        image1:
          "https://news.google.com/api/attachments/CC8iJ0NnNVJSVU41ZERNd1dHMU5iMWRMVFJDb0FSaXNBaWdCTWdNOW9BUQ=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iJ0NnNVJSVU41ZERNd1dHMU5iMWRMVFJDb0FSaXNBaWdCTWdNOW9BUQ",
        category: "travel",
        clicks: 488,
      },
      {
        id: 361,
        title:
          "'A memoir wrapped in this fiction tortilla of time travel' | Texas author explores the 1970's, sensitive topics in debut novel",
        Description:
          "The book is full of real tear-jerking memories, sensitive topics, comedic zingers and time-traveling.",
        source: "KENS5.com",
        time: 2,
        articleLink:
          "https://www.kens5.com/article/news/community/texas-houston-author-amy-daughters-debut-novel-time-travel-1970s-you-cannot-mess-this-up-a-true-story-that-never-happened/273-4f8831ad-9daf-4c3b-8a35-4b0d8c8ad1cb",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNXplVUZQVVhKZldrSnVaMFozVFJDb0FSaXNBaWdCTWdZUlpZaXVUUVE=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNXplVUZQVVhKZldrSnVaMFozVFJDb0FSaXNBaWdCTWdZUlpZaXVUUVE",
        category: "travel",
        clicks: 244,
      },
      {
        id: 362,
        title: "Air Travel News Roundup: Top Headlines From March",
        Description:
          "Here is what happened in the last few weeks in the world of aviation.",
        source: "TravelPulse",
        time: 7,
        articleLink:
          "https://www.travelpulse.com/gallery/airlines-airports/air-travel-news-roundup-top-headlines-from-march-2024",
        image1:
          "https://news.google.com/api/attachments/CC8iI0NnNXJka3hHYURGeWFXOTNUM1pzVFJERUFSaUJBaWdCTWdB=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iI0NnNXJka3hHYURGeWFXOTNUM1pzVFJERUFSaUJBaWdCTWdB",
        category: "travel",
        clicks: 151,
      },
      {
        id: 363,
        title: "I moved to Australia for FIFO work to fund travels",
        Description:
          "As a FIFO worker, I've made around $80000 in the last nine months working 12-hour days for three weeks straight � and I have no living...",
        source: "Business Insider",
        time: 7,
        articleLink:
          "https://www.businessinsider.com/what-fifo-work-is-like-australia",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNDJWbk51TldKMGVYVnBOMDgwVFJEQ0FSaURBaWdCTWdhbEpKYXRsUWc=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNDJWbk51TldKMGVYVnBOMDgwVFJEQ0FSaURBaWdCTWdhbEpKYXRsUWc",
        category: "travel",
        clicks: 421,
      },
      {
        id: 364,
        title: "Women Succeeding In Travel Hospitality",
        Description:
          "As Women's Month unfolds, we look at women in key travel positions around the world. Jean-Michel Cousteau Resort stands as a beacon of...",
        source: "Forbes",
        time: 7,
        articleLink:
          "https://www.forbes.com/sites/judykoutsky/2024/03/30/women-succeeding-in-travel-hospitality/",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNVFjbWhHYjNKT04wNXFVRjlWVFJDM0FSaVRBaWdCTWdZcGRaTE5NUWM=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVFjbWhHYjNKT04wNXFVRjlWVFJDM0FSaVRBaWdCTWdZcGRaTE5NUWM",
        category: "travel",
        clicks: 186,
      },
      {
        id: 365,
        title: "We Need To Talk About Fast Travel In �Dragon�s Dogma 2�",
        Description:
          "At this point I cannot hold my tongue about my least favorite part in a game I am enjoying. That would be fast travel in Dragon's Dogma 2,...",
        source: "Forbes",
        time: 4,
        articleLink:
          "https://www.forbes.com/sites/paultassi/2024/03/26/we-need-to-talk-about-fast-travel-in-dragons-dogma-2/",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNVZZbkJKZVZsU05GOWpSbWg1VFJDb0FSaXNBaWdCTWdhQmNveXNQUVk=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNVZZbkJKZVZsU05GOWpSbWg1VFJDb0FSaXNBaWdCTWdhQmNveXNQUVk",
        category: "travel",
        clicks: 137,
      },
      {
        id: 366,
        title:
          "Adventure Awaits In Ohio, The Heart Of It All; New Travel Guide Available � Peak of Ohio",
        Description:
          "(COLUMBUS, Ohio) � Governor Mike DeWine released the 2024 State of Ohio Travel Guide produced by TourismOhio, inviting visitors and...",
        source: "peakofohio.com",
        time: 3,
        articleLink:
          "https://www.peakofohio.com/local-news/adventure-awaits-in-ohio-the-heart-of-it-all-new-travel-guide-available",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNW5aMFpNZEdKMFdWQkxlRkJSVFJDeEFSaWNBaWdCTWdZSmtJYXNPUVE=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNW5aMFpNZEdKMFdWQkxlRkJSVFJDeEFSaWNBaWdCTWdZSmtJYXNPUVE",
        category: "travel",
        clicks: 121,
      },
      {
        id: 367,
        title: "Time Travel Books: 11 Mind-Bending Reads To Enjoy!",
        Description:
          "Woman's World gathered the ten of the best time travel books! They are guaranteed to take you on a captivating trip through space and time!",
        source: "Woman's World",
        time: 3,
        articleLink:
          "https://www.womansworld.com/posts/books/time-travel-books",
        image1:
          "https://news.google.com/api/attachments/CC8iK0NnNTJaR3RXVEVwQk0yWjFNVWhNVFJDb0FSaXNBaWdCTWdZWmhJU3V5UU0=-w280-h168-p-df-rw",
        image2:
          "https://i.zedtranslate.com/newsimage/CC8iK0NnNTJaR3RXVEVwQk0yWjFNVWhNVFJDb0FSaXNBaWdCTWdZWmhJU3V5UU0",
        category: "travel",
        clicks: 290,
      },
    ]);
  const [isLoaded] = useState(true);
  let sliderRef = useRef<any>(null);
  const next = () => {
    sliderRef.current.slickNext();
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
          {data.map((item, idx) => (
            <CardCrousal isLoaded={isLoaded} data={item} key={idx} />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Carousel;
