import React from "react";
import { motion, useScroll } from "framer-motion"



function Content(props) {
	const { scrollYProgress } = useScroll();

	return (
		<main>
			<article>
				<section
					className="flex sticky top-10 justify-center flex-col"
					style={{ height: "90vh" }}
					
				>
					<h1 className="text-6xl font-anton m-7 ">{props.data.name}</h1>
					<h3 className=" text-3xl font-Montserrat mx-7 ">
						{props.data.designation}
					</h3>

					{/* <img className=" absolute z-0 left-10 top-20 opacity-40" src={dp} alt="" /> */}
				</section>
				<section
					className="flex justify-center flex-col my-7"
					style={{ height: "30vh" }}
				>
					<ul>
						<li className="flex m-7 gap-3 text-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="none"
								className="w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
							<h3>{props.data.phone}</h3>
						</li>
						<li className="flex m-7 gap-3 text-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-7 h-7"
							>
								<path
									strokeLinecap="round"
									d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
								/>
							</svg>

							<h3 className=" text-clip">
								{props.data.email} <br /> @knowrganization.com
							</h3>
						</li>
						<li className="flex m-7 gap-3 text-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-7 h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
								/>
							</svg>
							<h3>{props.data.website}</h3>
						</li>
					</ul>
				</section>
				<section>
					<ul className="flex justify-between mx-7 mb-32">
						{props.data.socials.twitter == "" ? null : (
							<li className="">
								<a href={props.data.socials.twitter}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-7 w-7"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
									</svg>
								</a>
							</li>
						)}
						<li className="">
							<a href={props.data.socials.linkedin}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-7 w-7"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
								</svg>
							</a>
						</li>
						{props.data.socials.stackoverflow == "" ? null : (
							<li className="">
								<a href={props.data.socials.stackoverflow}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-7 w-7"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
									</svg>
								</a>
							</li>
						)}
						{props.data.socials.github == "" ? null : (
							<li className="">
								<a href={props.data.socials.github}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-7 w-7"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
							</li>
						)}
					</ul>
				</section>
				<section className=" fixed bottom-7 right-7 ">
					<button className=" bg-primary text-white px-7 py-3 rounded-full font-Montserrat">
						Save Contact
					</button>
				</section>
			</article>
		</main>
	);
}

export default Content;
