import dataProjects from "../dataProjects";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const projectRef = useRef<(HTMLLIElement | null)[]>([]);

	useEffect(() => {
		projectRef.current.forEach((oneProject) => {
			if (!oneProject) return;

			gsap.fromTo(
				oneProject,
				{
					autoAlpha: 0,
					scale: 0,
				},
				{
					autoAlpha: 1,
					scale: 1,
					duration: 0.7,
					ease: "none",
					scrollTrigger: {
						trigger: oneProject,
						start: "top 80%",
						toggleActions: "play none none none",
					},
				}
			);
		});
	}, []);

	return (
		<ul className="w-full max-w-[1100px] grid-projects">
			{dataProjects.map((oneProject, index) => {
				const { id, title, image } = oneProject;
				const [techOne, techTwo, techThree] = oneProject.technologies;

				return (
					<li
						key={id}
						className="uppercase"
						ref={(oneProject) => {
							projectRef.current[index] = oneProject;
						}}
					>
						<div className="grid-project">
							<img src={image} alt={title} />

							<div className="grid-project-overlay">
								<Button isForm={false} text="view project" />
								<Button isForm={false} text="view code" />
							</div>
						</div>
						<h4 className="font-bold text-2xl leading-8 mt-5">
							{title}
						</h4>
						<p className="flex gap-3 font-medium text-lg leading-7">
							<span>{techOne}</span>
							<span>{techTwo}</span>
							<span>{techThree}</span>
						</p>
					</li>
				);
			})}
		</ul>
	);
};

export default Projects;
