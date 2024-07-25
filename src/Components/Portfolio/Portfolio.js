import React from "react";
import PageHeader from "../Pageheader";
import { BsInfoCircleFill } from "react-icons/bs";

const Portfolio = () => {
    
    return <div className="Portfolio">
        <PageHeader
            HeaderText="My Portfolio"
            Icon={<BsInfoCircleFill size={30} />} />

    </div>;;
};

export default Portfolio;
