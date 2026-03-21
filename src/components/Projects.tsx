import dataProjects from "../dataProjects";
import Button from "./Button";

const Projects = () => {
	return (
		<ul className="w-full max-w-275 grid-projects">
			{dataProjects.map((oneProject) => {
				const { id, title, image } = oneProject;
				const [techOne, techTwo, techThree] = oneProject.technologies;

				return (
					<li key={id} className="uppercase">
						<article>
							<div className="grid-project">
								<img src={image} alt={title} />

								<div className="grid-project-overlay">
									<Button
										isForm={false}
										text="view project"
										blank="_blank"
										rel="noopener noreferrer"
										ariaLabel={`View ${title} project`}
									/>
									<Button
										isForm={false}
										text="view code"
										blank="_blank"
										rel="noopener noreferrer"
										ariaLabel={`View ${title} source code`}
									/>
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
						</article>
					</li>
				);
			})}
		</ul>
	);
};

export default Projects;
