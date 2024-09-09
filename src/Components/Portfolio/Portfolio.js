import React from "react";
import PageHeader from "../Pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import { Projects } from "../Skills/utils";
const Portfolio = () => {
    
    return <div className="Portfolio">
        <PageHeader
            HeaderText="My Projects"
            Icon={<BsInfoCircleFill size={30} />} />
        <div className="project-list">
            {Projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img
                        src={project.image}
                        sizes="(max-width: 600px) 500px, 1000px"
                        alt="no-img"
                        loading="lazy"  
                        onError={(e) => e.target.src = "https://via.placeholder.com/150?text=Image+Not+Found"}
                    />
                    <div className="project-card__content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
};

export default Portfolio;
