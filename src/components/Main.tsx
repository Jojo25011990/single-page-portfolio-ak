import { useState, useEffect, useRef } from "react";
import Skills from "./Skills";
import SkillsHeading from "./SkillsHeading";
import Projects from "./Projects";
import Title from "./Title";
import Button from "./Button";
import Image from "./Image";
import RingsImage from "../assets/images/pattern-rings.svg";

const Main = () => {
	const [isActive, isSetActive] = useState(false);

	const skillSectionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!skillSectionRef.current) return;

			const rectTop = skillSectionRef.current.getBoundingClientRect();

			if (rectTop.top < window.innerHeight * 0.8) isSetActive(true);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<main className="w-full mt-[104px] px-5">
			{/* Skills */}
			<section
				className="relative w-full flex justify-center"
				ref={skillSectionRef}
			>
				<SkillsHeading isActive={isActive} />
				<Skills isActive={isActive} />
				<Image
					srcImg={RingsImage}
					altImg="Background Image - White Rings"
					className="-bottom-15 -right-61"
				/>
			</section>
			{/* End of Skills */}

			{/* Projects */}
			<section className="w-full flex flex-col items-center justify-center mt-[140px] gap-20">
				<div className="w-full max-w-[1100px] flex justify-between gap-10">
					<Title isHeader={false} text="Projects" />
					<Button isForm={false} className="self-center" />
				</div>
				<Projects />
			</section>
			{/* End of Projects */}
		</main>
	);
};

export default Main;
