import Summary from "../components/Summary";
import Technologies from "../components/Technologies";
import WorkPage from "./WorkPage"
import data from "../assets/data.json";

function HomePage({projects}) {
	const { firstName, lastName, summary, title, tech,  } = data;
	return (
		<div>
			<Summary
				summary={summary}
				name={`${firstName} ${lastName}`}
				title={title}
			/>
			<Technologies tech={tech} title={"languages & tools"} />
			<WorkPage projects={projects}/>
		</div>
	);
}

export default HomePage;
