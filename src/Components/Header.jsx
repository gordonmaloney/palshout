import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<h2 style={{ paddingLeft: "1.5%" }}>
				<Link to="../"
				style={{textDecoration: "none"}}
				>
					<span style={{ color: "#F6F3F6" }}>Demand justice for Palestine</span>
				</Link>
			</h2>
		</div>
	);
};

export default Header;
