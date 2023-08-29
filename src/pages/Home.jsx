import React from "react";

const Home = () => {
	return (
		<>
			<div className="container col-md-8 mt-5">
				<div className="card shadow mb-5">
					<div className="card-body">
						<h3 className="card-title text-center">Studio Ghibli API Lab</h3>
						<p className="card-text">
							This is my React Routing Lab using Studio Ghibli API. This is like a mini IMDB for a animation studio. I use React, useState and useEffect hooks, Fetch, a REST API, Bootstrap, and React
							Router to build this project. Use the navbar to click around to see all films or all people and click the Read More links to see the full details of that resource. Enjoy!
						</p>
						<h6 className=" text-center card-subtitle m-2 text-secondary">
							If you like what you see, contact me up here:{" "}
							<a href="https://mendenhallmedias.com/" target="_blank" className="text-primary">
								My Website
							</a>
						</h6>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
