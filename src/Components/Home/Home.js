import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Home = () => {
  const Navigate = useNavigate();

  const handler = () => {
    Navigate("/Contact");
  };
  return (
    <section className="Home" id="home">
      <div className="Home_text_wrapper">
        <h1>
          Hello, I'm Sriram Garapati
          <br />
          Freelance Developer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={2}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <button className="btn" onClick={handler}>
            Hire Me
          </button>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
