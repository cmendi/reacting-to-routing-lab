import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const FilmDetails = () => {
	const { filmid } = useParams();
	const [filmDetails, setFilmDetails] = useState({});

	useEffect(() => {
		fetch(`http://api-ghibli.herokuapp.com/films/${filmid}`)
			.then((res) => res.json())
			.then((data) => setFilmDetails(data))
			.catch((e) => alert(e.message));
	}, [filmid]);

	return (
		<>
			<main className="container mt-5">
				<section className="row justify-content-center">
					<div className="col-md-6">
						<div className="card p-0 m-3 shadow">
							<h4 className="card-header p-3 fw-bold">{filmDetails.title}</h4>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-body-tertiary">
									Produced by <span className="text-dark fs-5">{filmDetails.producer}</span>
								</li>
								<li className="list-group-item text-body-tertiary">
									Directed by <span className="text-dark fs-5">{filmDetails.director}</span>
								</li>
								<li className="list-group-item text-body-tertiary">
									Released in <span className="text-dark fs-5">{filmDetails.release_date}</span>
								</li>
								<li className="list-group-item text-body-tertiary">
									Rotten Tomato Score{" "}
									<span className={`${filmDetails.rt_score > 80 ? "text-success" : filmDetails.rt_score >= 61 ? "text-warning" : "text-danger"} fs-5`}> {filmDetails.rt_score}</span>
								</li>
							</ul>
							<p className="card-text px-3 py-2">{filmDetails.description}</p>
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
