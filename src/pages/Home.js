import React from "react";
import MovieData from "./MovieData";
import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";

const Home = () => {
  const videoProperties = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/7TavVZMewpY",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/EPSUQ7mQ5Oo",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/aWzlQ2N6qqg",
    },
    {
      id: 4,
      src: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
    },
    {
      id: 5,
      src: "https://www.youtube.com/watch?v=yDJIcYE32NU",
    },
  ];
  return (
    <div className="video d-flex flex-column justify-content-center align-items-center">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={true}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <MovieData />
    </div>
  );
};

export default Home;
