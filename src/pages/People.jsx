import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("http://api-ghibli.herokuapp.com/people")
			.then((res) => res.json())
			.then((data) => setPeople(data))
			.catch((e) => alert(e.message));
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
					{people.map((person) => (
						<div className="col-lg-8" key={`film-key-${person.id}`}>
							<div className="card p-0 m-3 shadow">
								<div className="card-body d-flex justify-content-between">
									<h4 className="m-0">{person.name}</h4>
									<Link to={`/peopledetails/${person.id}`}>Read Full Details</Link>
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

export default People;
