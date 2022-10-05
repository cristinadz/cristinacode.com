import React from "react";

function About({ about, title, name }) {
	return (
		<>
			<div className="about-container">
				<div className="title">
					<p>
						{title.toUpperCase()}
					</p>
				</div>
				{/* <div className="cristinaImg"> <img src={cristinaImg} />	</div> */}
				<div className="name">
					<p>
						{name.toUpperCase()}
					</p>
				</div>
				<div className="about-me">
					<p> {about.toUpperCase()}</p>
				</div>
			</div>
		</>
	);
}

export default About;
