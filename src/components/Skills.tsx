type SkillsProps = {
	isActive: boolean;
};

type Skill = {
	title: string;
	description: string;
};

const Skills = ({ isActive }: SkillsProps) => {
	const dataSkills: Skill[] = [
		{
			title: "HTML",
			description: "5 Years Experience",
		},
		{
			title: "CSS",
			description: "5 Years Experience",
		},
		{
			title: "JavasCript",
			description: "4 Years Experience",
		},
		{
			title: "Accessibility",
			description: "2 Years Experience",
		},
		{
			title: "React",
			description: "2 Years Experience",
		},
		{
			title: "Sass",
			description: "4 Years Experience",
		},
	];

	return (
		<ul className="w-full max-w-[1100px] grid-skills pt-[72px] border-t-[1px] border-t-white">
			{dataSkills.map((oneSkill, index) => {
				const { title, description } = oneSkill;
				return (
					<li
						key={index}
						className={`${isActive ? "is-active" : ""}`}
						style={{ "--i": index + 1 } as React.CSSProperties}
					>
						<h3 className="text-white font-bold text-5xl tracking-[-1.5px] leading-14">
							{title}
						</h3>
						<p className="text-grey-primary font-medium text-lg leading-7">
							{description}
						</p>
					</li>
				);
			})}
		</ul>
	);
};

export default Skills;
