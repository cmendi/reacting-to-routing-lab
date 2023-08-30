import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		fetch("http://api-ghibli.herokuapp.com/films")
			.then((res) => res.json())
			.then((filmData) => setFilms(filmData));
	}, []);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			<main className="container mt-5">
				<section className="row justify-content-center">
					{films.map((film) => (
						<div className="col-lg-8" key={`film-key${film.id}`}>
							<div className="card p-0 m-3 shadow">
								<div className="card-body">
									<h4>{film.title}</h4>
									<p>{film.description}</p>
								</div>
								<div className="d-flex justify-content-end mx-4 mb-3">
									<Link to={"/filmsdetails"} className="btn btn-primary">
										Read Full Details
									</Link>
								</div>
							</div>
						</div>
					))}
				</section>
			</main>
			<div className="d-flex justify-content-center m-3">
				<button className="btn btn-primary" onClick={scrollTop}>
					Back to Top
				</button>
			</div>
		</>
	);
};

export default Films;
