import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
const data = {
	name: "Faizali Sayyad",
	designation: "",
	phone: "+91 8793773287",
	email: "faizali.s",
	website: "knoworganization.com",
	socials: {
		linkedin: "https://www.linkedin.com/in/faizali-sayyad-664187231/",
		twitter: "",
		github: "",
		stackoverflow: "",
	},
};

function Faizali() {
	return (
		<div>
			<Header />
			<Content data={data} />
		</div>
	);
}

export default Faizali;
