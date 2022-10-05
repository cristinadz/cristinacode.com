import React from "react";

function Technologies({ tech, title }) {
	return (
		<div className="tech-container">
			<div className="tech-title">
				<h3> {title.toUpperCase()} </h3>
			</div>
			<div className="tech-list">
				{tech.map((item, i) => (
					<ul key={i}>{item.toLowerCase()}</ul>
				))}
			</div>
		</div>
	);
}

export default Technologies;
