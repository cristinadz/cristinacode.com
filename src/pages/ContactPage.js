import React from "react";
import data from "../assets/data.json";

function ContactPage() {
	const { email, linkedin } = data;

	return (
		<div className="contact-container">
			<h3 className="contact-title"> SEND ME A MESSAGE </h3>

			<a className="contact-email" href="mailto:diazcristina.la@gmail.com">
				{email.toUpperCase()}
			</a>

			<a className="contact-linkedin" href={linkedin}>
				{" "}
				LINKEDIN
			</a>
		</div>
	);
}

export default ContactPage;
