import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ClientReview
        image="/images/melany.png"
        name="Melany Rivera"
        role="Assistant Controller - AMJ Campbell Vancouver"
        review="As Nathan's supervisor for 2 co-op terms, I can say that he was an invaluable asset in helping improve automation within our department. He is a self-motivated worker and has a keen awareness for optimizing and streamlining processes and solving problems."
      />
      <ClientReview
        image="/images/carroll.png"
        name="Carroll Lefebvre"
        role="President - The Sidekick Players Club"
        review="Nathan exceeded our expectations in creating a modern website that helps our marketing efforts. His expertise and attention to detail have enhanced our online presence, making our message more accessible and engaging to our audience. We're grateful for his contribution to our team."
      />
    </Carousel>
  );
};

export default TestimonialSlider;
