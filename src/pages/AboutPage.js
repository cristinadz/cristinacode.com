import cristinasFace from "../assets/cristinas_face.JPG";

function AboutPage({ about, links }) {
	const { greeting, title, paragraph, resume } = about;

	const renderedLinks = links.map((link) => {
		return (
			<ul>
				<a href={link.url} target="_blank">
					{link.name}
				</a>
			</ul>
		);
	});

	return (
		<div className="about-container">
			<div className="about-img">
				<img src={cristinasFace} alt="cristinas face" />
			</div>
			<div className="about-text">
				<h2> {greeting.toUpperCase()}</h2>
				<h3> {title}</h3>
				<p>{paragraph} </p>
			</div>
			<div className="about-links">{renderedLinks}</div>
		</div>
	);
}

export default AboutPage;
