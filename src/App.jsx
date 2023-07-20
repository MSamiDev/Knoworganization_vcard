import { Route, Routes } from "react-router-dom";
import MohammadSami from "./pages/MohammadSami";
import Faizali from "./pages/Faizali";
import Affan from "./pages/Affan";
import { useState, useEffect } from "react";
import logo from "./assets/logo/W-Back_B-Letter_box.png";
import Home from "./pages/Home";
import {motion} from "framer-motion"


function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<motion.div 
				animate={{
					height:"3rem",
					width:"100vw",
				}}
				transition={{ ease: "easeOut", duration: 2 }}
				className=" h-screen w-screen flex justify-center items-center my-3"
				>
					<motion.img 
					initial={{
						opacity:0,
					}}
					animate={{
						height:"3rem",
						opacity:1,
					}}
					transition={{ ease: "easeOut", duration: 2 }}
					src={logo} className=" h-32 lg:h-72" alt="" />
				</motion.div>
			) : (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mohammadsami" element={<MohammadSami />} />
					<Route path="/faizali" element={<Faizali />} />
					<Route path="/affan" element={<Affan />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
