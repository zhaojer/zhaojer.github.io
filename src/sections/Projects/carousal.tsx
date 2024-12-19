import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

function Carousal() {
  //FIXME: Handle Resize Event?
  const arr = ["quality", "logic", "value", "impact"];

  const options = {
    autoPlay: true,
    axis: "vertical",
    interval: 4000,
    transitionTime: 500,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    stopOnHover: false,
    swipeable: false,
    showThumbs: false,
    dynamicHeights: true,
  };

  return (
    <Container>
      <Carousel {...options}>
        {arr.map((el, idx) => {
          return (
            <Span key={idx}>
              {el}.
            </Span>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Carousal;

const Container = styled.div`
  width: 15vw;

  overflow: hidden;
  position: relative;
  margin-left: 10px;

  background-color: beige;
  color: black;
`;

const Span = styled.span`
`;
