import { Card } from "./Card";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

export const Carousel = () => {
  return (
    <Flicking align="prev" circular={true} hideBeforeInit={true} duration={500}>
      <Card index={1} classes="mx-3" />
      <Card index={2} classes="mx-3" />
      <Card index={3} classes="mx-3" />
    </Flicking>
  );
};
