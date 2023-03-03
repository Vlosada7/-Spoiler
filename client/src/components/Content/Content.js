import React from "react";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import "./Content.css";

const Content = () => {
	return (
		<div className="content">
			<Navbar />
			<Dashboard />
		</div>
	);
};

export default Content;
