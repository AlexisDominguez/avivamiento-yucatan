import { IoEllipse } from 'react-icons/io5';
import { TestimonyCard } from './TestimonyCard';
import Slider from '@ant-design/react-slick';
import 'slick-carousel/slick/slick.css';
import '../styles/slick-theme.css';
import { useRef } from 'react';

export const Testimonials = () => {
  const checkIfDotIsActive = () => {};

  const ref = useRef<HTMLSpanElement | null>(null);

  return (
    <>
      <Slider
        dots={true}
        infinite={true}
        speed={700}
        slidesToScroll={1}
        slidesToShow={1}
        autoplay
        dotsClass="slick-dots scale-[2]"
      >
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </Slider>
      {/* <div className="flex gap-2 justify-center mt-6">
        <IoEllipse size={14} />
        <IoEllipse size={14} color="#D9D9D9" />
        <IoEllipse size={14} color="#D9D9D9" />
        <IoEllipse size={14} color="#D9D9D9" />
      </div> */}
    </>
  );
};
