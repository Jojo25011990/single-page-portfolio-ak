type SkillsHeadingProps = {
	isActive: boolean;
};

const SkillsHeading = ({ isActive }: SkillsHeadingProps) => {
	return (
		<h2 className="absolute font-bold text-[68px] leading-[88px] tracking-[-2.5px] skills-heading">
			<span className={`${isActive ? "is-active" : ""}`}>s</span>
			<span className={`${isActive ? "is-active" : ""}`}>k</span>
			<span className={`${isActive ? "is-active" : ""}`}>i</span>
			<span className={`${isActive ? "is-active" : ""}`}>l</span>
			<span className={`${isActive ? "is-active" : ""}`}>l</span>
			<span className={`${isActive ? "is-active" : ""}`}>s</span>
		</h2>
	);
};

export default SkillsHeading;
