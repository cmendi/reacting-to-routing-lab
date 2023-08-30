import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import React from "react";
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import FilmDetails from "./pages/FilmDetails";
import PeopleDetails from "./pages/PeopleDetails";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/films" element={<Films />} />
				<Route path="/people" element={<People />} />
				<Route path="/filmdetails/:filmid" element={<FilmDetails />} />
				<Route path="/peopledetails/:peopleid" element={<PeopleDetails />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
