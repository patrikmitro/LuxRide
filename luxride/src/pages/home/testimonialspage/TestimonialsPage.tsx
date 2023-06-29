import React from "react";
import {
  TestimonialsPageContainer,
  TestimonialsPageWrapper,
} from "./TestimonialsPage.styles";
import CustomerReview from "./customereview/CustomerReview";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { TestimonialsData } from "./TestimonialsData";

const TestimonialsPage = () => {
  return (
    <TestimonialsPageWrapper>
      <TestimonialsPageContainer>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop
          draggable={false}
        >
          {TestimonialsData.map(({ name, text, url }, index) => (
            <SwiperSlide>
              <CustomerReview name={name} text={text} url={url} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialsPageContainer>
    </TestimonialsPageWrapper>
  );
};

export default TestimonialsPage;
