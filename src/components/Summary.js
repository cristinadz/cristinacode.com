import React from "react";

function Summary({ summary, title, name }) {
	return (
		<>
			<div className="summary-container">
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
				<div className="summary">
					<p> {summary.toUpperCase()}</p>
				</div>
			</div>
		</>
	);
}

export default Summary;
