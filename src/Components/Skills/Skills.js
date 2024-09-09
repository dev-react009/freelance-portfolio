import React from "react";
import PageHeader from "../Pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import {SkillsData} from "./utils";
import {Animate} from "react-simple-animate"
import {Line} from "rc-progress";
import './style.scss';


const Skills = () => {
    
    return <div className="Skills">
        <PageHeader
            HeaderText="My Skills"
            Icon={<BsInfoCircleFill size={30} />} 
        />
        <div className="Skills__content__wrapper">
            {
                SkillsData.map((itm,index)=>(
                    <div key={index+"ng"} className="Skills__content__wrapper__innerContent">
                        <Animate
                        play
                        duration={1}
                        delay={0.3}
                        start={{
                            transform :"translateX(-200px)"
                        }}

                        end={{
                            transform: "translateX(0px)"
                        }}
                        >
                            <h3 className="Skills__content__wrapper__innerContent__category-text">{itm.label}</h3>
                            <div className="Skills__content__wrapper__innerContent__category-text__ProgressBar">
                                {
                                    itm.data.map((skillsItems,ind)=>(
                                        <Animate
                                            play
                                            duration={1}
                                            keyframes={ ["opacity:1","opacity:0"]}
                                            iteratorCount="1"
                                        >
                                            <div className="Progress-bar__wrapper" key={ind}>
                                                <p>{skillsItems.skillName}</p>
                                                <Line
                                                    percent={skillsItems.percentage}
                                                    strokeWidth={2}
                                                    strokeColor='var(--yellow-theme-nav-background-color)'
                                                    trailWidth={2}
                                                    trailColor="  var(--yellow-theme-main-color)"
                                                    strokeLinecap="round" 
                                                />
                                            </div>
                                        </Animate>
                                    ))
                                }
                            </div>
                        </Animate>
                    </div>

                ))
            }
        </div>

    </div>;
};

export default Skills;
