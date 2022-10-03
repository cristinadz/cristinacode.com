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

			<div className="title"> SOFTWARE <br/> DEVELOPER</div>

      <div className="cristinaImg" > 
        <img src={cristinaImg} />
      </div>


			<About about={data.aboutBlurb} />

			<Technologies tech={data.tech} />
			{/* <Projects projects={data.projects} /> */}
		</div>
	);
}

export default App;
