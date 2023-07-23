import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
const data = {
	name: "Affan Tanke",
	designation: "",
	phone: "+91 9890175643",
	email: "affan.t",
	website: "knoworganization.com",
	socials: {
		linkedin: "https://www.linkedin.com/in/affan-tanke-6015aa199/",
		twitter: "",
		github: "",
		stackoverflow: "",
	},
};

function Affan() {
	return (
		<div>
			<Header />
			<Content data={data} />
		</div>
	);
}

export default Affan;
