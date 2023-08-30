import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PeopleDetails = () => {
	const { peopleid } = useParams();
	const [peopleDetails, setPeopleDetails] = useState({});

	useEffect(() => {
		fetch(`http://api-ghibli.herokuapp.com/people/${peopleid}`)
			.then((res) => res.json())
			.then((data) => setPeopleDetails(data))
			.catch((e) => alert(e.message));
	}, [peopleid]);

	return (
		<>
			<main className="container mt-5">
				<section className="row justify-content-center">
					<div className="col-md-6">
						<div className="card p-0 m-3 shadow">
							<h4 className="card-header p-3 fw-bold text-center">{peopleDetails.name}</h4>
							<ul className="list-group list-group-flush">
								<li className="list-group-item text-body-tertiary">
									Gender <span className="text-dark fs-5">{peopleDetails.gender}</span>
								</li>
								<li className="list-group-item text-body-tertiary">
									Age <span className="text-dark fs-5">{peopleDetails.age}</span>
								</li>
								<li className="list-group-item text-body-tertiary">
									Eye Color <span className="text-dark fs-5">{peopleDetails.eye_color}</span>
								</li>
								<li className="list-group-item text-body-tertiary">
									Hair Color <span className="text-dark fs-5">{peopleDetails.hair_color}</span>
								</li>
							</ul>
							<div className="d-flex m-4">
								<Link to={"/people"} className="btn btn-outline-secondary">
									Back to People
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default PeopleDetails;
