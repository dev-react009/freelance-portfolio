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
    label: "Mobile",
    value: "7306760872",
  },
  // {
  //   label: "Git",
  //   value: "https://github.com/SriramSololearner",
  // },
];

const Summary = `My name is Sriram Garapati 
I have been living in kakinada a bustling city in Andhra Pradesh.Which offers a thriving port, 
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
            <div class="card">

              <a class="socialContainer containerThree" href="https://www.linkedin.com/in/sriram-g-67a2001a4" target="_blank" rel="noreferrer" >
                <svg viewBox="0 0 448 512" class="socialSvg linkedinSvg">
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
              <a class="socialContainer containerFour" href="mailto:sriram.gsr16@gmail.com">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  class="socialSvg whatsappSvg"
                >
                  <path
                    d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"
                  ></path>
                  <path
                    d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"
                  ></path>
                </svg>
              </a>
              <a class="socialContainer containerFive" href="https://github.com/dev-react009" target="_blank" rel="noreferrer">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  class="socialSvg githubSvg"
                >
                  <path
                    d="M8 0a8 8 0 0 0-2.53 15.6c.4.07.55-.17.55-.38v-1.39c-2.23.48-2.69-1.08-2.69-1.08-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.8.05 1.23.82 1.23.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.65-.89-3.65-3.96 0-.87.31-1.58.82-2.13-.08-.2-.36-1.01.08-2.11 0 0 .67-.22 2.2.82a7.64 7.64 0 0 1 2-.27c.68 0 1.35.09 2 .27 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.55.82 1.26.82 2.13 0 3.08-1.88 3.76-3.66 3.96.29.25.55.73.55 1.48v2.19c0 .21.14.46.56.38A8 8 0 0 0 8 0z"
                  ></path>
                </svg>
              </a> 

              
            </div>
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
