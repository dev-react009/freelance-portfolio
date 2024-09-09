import React from "react";
import PageHeader from "../Pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import { data } from "./utils";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss";
import {MdWorkspacesFilled, MdWorkspacesOutline} from "react-icons/md"


const Resume = () => {
    return <div className="Resume">
        <PageHeader
            HeaderText="My Resume"
            Icon={<BsInfoCircleFill size={30} />} 
            />
            <div className="timeline">
            <div className="timeline__Training">
                <h3 className="timeline__Training__header-text">Experience</h3>

                <VerticalTimeline
                    layout="1-column"
                    lineColor="var( --yellow-theme-main-color)">
                    {
                        data.experience.map((itm, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__Training__vertical-timeline-element"
                                contentStyle={{
                                    background: "none",
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: "2.5px solid var(--yellow-theme-main-color)"
                                }}
                                contentArrowStyle={{
                                    fill: 'var(--yellow-theme-main-color)',

                                }}
                                icon={<MdWorkspacesOutline />}>
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h2 className="vertical-timeline-element-title">
                                        {itm.title}
                                    </h2>
                                    <h4 className="vertical-timeline-element-title-subtitle">{itm.companyName}</h4>
                                    <p className="vertical-timeline-element-title-Duration">{itm.duration}</p>
                                    <p className="vertical-timeline-element-title-Duration">{itm.description}</p>
                                    <p className="vertical-timeline-element-title-Duration">{itm.responsibilities[0]}</p>

                                </div>
                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </div>
            <div className="timeline__Training">
                <h3 className="timeline__Training__header-text">Training</h3>

                <VerticalTimeline 
                layout="1-column"
                    lineColor="var( --yellow-theme-main-color)">
                        {
                        data.Training.map((itm, i) =>( 
                            <VerticalTimelineElement
                            key={i}
                                className="timeline__Training__vertical-timeline-element"
                                contentStyle={{
                                    background:"none",
                                    color:'var(--yellow-theme-sub-text-color)',
                                    border:"2.5px solid var(--yellow-theme-main-color)"
                                }}
                                contentArrowStyle={{
                                    fill: 'var(--yellow-theme-main-color)',
                                    
                                }}
                                icon={<MdWorkspacesOutline/>}>
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h2 className="vertical-timeline-element-title">
                                        {itm.name}
                                    </h2> 
                                    <h4 className="vertical-timeline-element-title-subtitle">{itm.description}</h4>
                                    <p className="vertical-timeline-element-title-Duration">{itm.dateAdded}</p>
                                    <p className="vertical-timeline-element-title-Duration">{itm.timeDuration}</p>
                                </div>
                                </VerticalTimelineElement>
                        ))
                        }
                    </VerticalTimeline>
            </div>
            <div className="timeline__Education">
                <h3 className="timeline__Education__header-text">Education</h3>
                <VerticalTimeline
                    layout="1-column"
                    lineColor="var( --yellow-theme-main-color)">
                    {
                        data.education.map((itm, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__Education__vertical-timeline-element"
                                contentStyle={{
                                    background: "none",
                                    color: 'var(--yellow-theme-sub-text-color)',
                                    border: "2.5px solid var(--yellow-theme-main-color)"
                                }}
                                
                                contentArrowStyle={{
                                    fill: 'var(--yellow-theme-main-color)',
                                }}
                                icon={<MdWorkspacesFilled />}>
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h2 className="vertical-timeline-element-title">
                                        {itm.title}
                                    </h2>
                                    <h4 className="vertical-timeline-element-title-subtitle">{itm.institutionName}</h4>
                                    <p className="vertical-timeline-element-title-Date">{itm.degree}</p>
                                    <p className="vertical-timeline-element-title-Date">{itm.duration}</p>
                                </div>
                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </div>
            </div>
    </div>;
};

export default Resume;
