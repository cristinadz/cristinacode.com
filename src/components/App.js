import styling from "./App.css";
import { Route, Routes } from 'react-router-dom'

// assets
import data from "../assets/data.json";

// pages
import NavBar from "./NavBar";
import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"


function App() {
	const { projects } = data;
	return (
		<div className="container">
			<NavBar />
			<Routes>
				<Route path="/" element= {<HomePage />} />
				<Route path="/work" element= {<WorkPage projects={projects} />} />
				<Route path="/about" element= {<AboutPage />} />
				<Route path="/contact" element= {<ContactPage />} />

			</Routes>
		</div>
	);
}

export default App;

// I'm a queer latinx full-stack software engineer.
//  I'm passionate about developing innovatibe, reliable and accessible applications. I'm interested in contributing to meaningful projects that are community oriented. When I'm not building or exploring new web experiences,
//  I'm probably with my 2 dogs or crocheting.
