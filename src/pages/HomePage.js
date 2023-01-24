import Summary from "../components/Summary";
import Technologies from "../components/Technologies";
import data from "../assets/data.json";

function HomePage() {
	const { firstName, lastName, summary, title, tech,  } = data;
	return (
		<div>
			<Summary
				summary={summary}
				name={`${firstName} ${lastName}`}
				title={title}
			/>
			<Technologies tech={tech} title={"Skills"} />
		</div>
	);
}

export default HomePage;
