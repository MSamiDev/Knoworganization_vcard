import React from "react";
import Header from "../components/Header";
import dp from "../assets/sami_DP.png";
import Content from "../components/Content";
const data = {
	name: "Mohammad Sami",
	designation: "CTO",
	phone: "+91 7020128546",
	email: "mohammadsami.s",
	website: "knoworganization.com",
	socials: {
		linkedin: "https://www.linkedin.com/in/mohammadsamishaikh/",
		twitter: "https://twitter.com/MSamiDev",
		github: "https://github.com/MSamiDev",
    stackoverflow: "https://stackoverflow.com/users/15675760/mohammad-sami",
	},
};

function MohammadSami() {
	return (
		<div>
			<Header />
      <Content data= {data}/>
		</div>
	);
}

export default MohammadSami;
