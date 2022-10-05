import styling from "./About.css";

// assets
import data from "../assets/data.json";
import cristinaImg from "../assets/cristinas_face.JPG";

// components
import About from "./About";
import Header from "./Header";
import Technologies from "./Technologies";
import Projects from "./Projects";

function App() {
	return (
		<div className="container">
			<Header data={data} />

			<About
				about={data.aboutBlurb}
				name={`${data.firstName} ${data.lastName}`}
				title={data.title}
				cristinaImg={cristinaImg}
			/>

			<Technologies tech={data.tech} />
			<Projects projects={data.projects} />
		</div>
	);
}

export default App;

// I'm a queer latinx full-stack software engineer.
//  I'm passionate about developing innovatibe, reliable and accessible applications. I'm interested in contributing to meaningful projects that are community oriented. When I'm not building or exploring new web experiences,
//  I'm probably with my 2 dogs or crocheting.
