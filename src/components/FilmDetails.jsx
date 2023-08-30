import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FilmDetails = () => {
	return (
		<>
			<main className="container mt-5">
				<section className="row justify-content-center">
					<div className="col-md-6">
						<div className="card p-0 m-3 shadow">
							<h4 className="card-header p-3 fw-bold">Film Title</h4>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-body-tertiary">
									Produced by <span className="text-dark fs-5">Film Producer</span>
								</li>
								<li className="list-group-item text-body-tertiary">
									Directed by <span className="text-dark fs-5">Film Director</span>
								</li>
								<li className="list-group-item text-body-tertiary">
									Released in <span className="text-dark fs-5">Film Release Date</span>
								</li>
								<li className="list-group-item text-body-tertiary">
									Rotten Tomato Score <span>95</span>
								</li>
							</ul>
							<p className="card-text px-3 py-2">Film Description</p>
							<div className="d-flex justify-content-end mx-4 mb-3">
								<Link to={"/"} className="btn btn-primary">
									Go Home
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default FilmDetails;
