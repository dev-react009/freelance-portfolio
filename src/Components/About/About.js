import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import {
  FaDatabase,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { Animate } from "react-simple-animate";
import PageHeader from "../Pageheader";
import "./style.scss";

const Profile = [
  {
    label: "Name",
    value: "Sriram",
  },
  {
    label: "Age",
    value: "24yrs",
  },
  {
    label: "Address",
    value: "Hyderabad",
  },
  {
    label: "Email",
    value: "Sriram.gsr6@gmail.com",
  },
  {
    label: "Mobile",
    value: "7306760872",
  },
  {
    label: "Git",
    value: "https://github.com/SriramSololearner",
  },
];

const Summary = `My name is Sriram Garapati 
I have been living in kakinada a bustling city in Andhrapradesh.Which offers a thriving port, 
Beautiful beaches.

I successfully completed my MCA degree in 2023, proving my dedication and hard work
in the field of computer Applications.
In 2021 I successfully completed my BCA degree from AKNU University.

I have dedicated my time and efforts to a bootcamp that offers comprehensive
training in the MERN STACK enabiling me to develop dynamic web applications from end to end.

With a solid foundation in python and the MERN stack, I possess the problem solving abilities
necessary to develop dynamic and user - friendly web applications.
`;
const About = () => {
  return (
    <div className="about">
      <PageHeader HeaderText="About Me" Icon={<BsInfoCircleFill size={30} />} />

      <div className="about__content">
        <div className="about__content__PersonalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>SoftwareDeveloper</h3>
            <p>{Summary}</p>
          </Animate>

          <Animate
            play
            duration={0.9}
            delay={2.5}
            start={{
              transform: "translateX(2000px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="PersonalInfoHeader">PersonalDetails</h3>
            <ul>
              {Profile.map((itm, ind) => (
                <li key={ind + "5"}>
                  <span className="title">{itm.label}</span>
                  <span className="value">{itm.value}</span>
                  
                </li>
              ))}
            </ul>
          </Animate>

          {/*  FaReact, FaNodeJs, FaDatabase, FaGithub ,FaPython*/}
        </div>
        <div className="about__content__ServicesWrapper">
          <Animate
            play
            duration={1.9}
            delay={2}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__ServicesWrapper__innerCont">
              <div>
                <DiJavascript1
                  size={50}
                  color="var(--Javascript-icon-color)"
                />
              </div>
              <div>
                <FaReact size={50} 
                color="var(--React-icon-color)"
                
                />
              </div>
              <div>
                <FaDatabase size={50} 
                color="var(--yellow-theme-main-color)"
                />
              </div>
              <div>
                <FaGithub size={50} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaNodeJs size={50} 
                // color="var(--yellow-theme-main-color)"
                  color="#339933" 
                />
              </div>
              <div>
                <FaPython size={50} 
                  color="var(--python-icon-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default About;
