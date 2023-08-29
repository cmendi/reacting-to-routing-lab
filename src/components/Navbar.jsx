import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="navbar shadow shadow-bottom">
				<div className="container">
					<img src="https://ghibliapi.vercel.app/images/logo.svg" className="w-25" alt="Studio Ghibli" />
					<div className="d-flex">
						<NavLink to="/" className={"m-3 btn btn-primary"}>
							Go Home
						</NavLink>
						<NavLink to="/films" className={"m-3 btn btn-primary"}>
							New Films
						</NavLink>
						<NavLink to="/people" className={"me-0 m-3 btn btn-primary"}>
							New People
						</NavLink>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
