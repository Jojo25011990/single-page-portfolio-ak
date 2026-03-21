import Skills from "./Skills";
import Projects from "./Projects";
import Title from "./Title";
import Button from "./Button";
import Image from "./Image";
import RingsImage from "../assets/images/pattern-rings.svg";

const Main = () => {
	return (
		<main className="w-full mt-26 px-5">
			{/* Skills */}
			<section className="relative w-full flex justify-center">
				<Skills />
				<Image
					srcImg={RingsImage}
					altImg=""
					className="-bottom-15 -right-61"
				/>
			</section>
			{/* End of Skills */}

			{/* Projects */}
			<section className="w-full flex flex-col items-center justify-center mt-35 gap-20">
				<div className="w-full max-w-275 flex justify-between gap-10">
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
