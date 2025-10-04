import Menu from "./Menu";
import Title from "./Title";
import Message from "./Message";
import Image from "./Image";
import Form from "./Form";
import RingsImage from "../assets/images/pattern-rings.svg";

const Footer = () => {
	return (
		<footer className="w-full  min-h-[675px] flex flex-col items-center justify-center bg-dark-secondary mt-[140px] py-[87.5px] px-5 gap-[92px]">
			<section
				className="relative w-full max-w-[1100px] flex justify-between  min-h-[327px] gap-10"
				id="contact"
			>
				<div className="w-full max-w-[412px] flex flex-col gap-[37px]">
					<Title isHeader={false} text="Contact" />
					<Message description="I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible." />
				</div>

				<Image
					srcImg={RingsImage}
					altImg="Background Image - White Rings"
					className="-bottom-15 -left-96"
				/>

				<Form />
			</section>
			<Menu isHeader={false} />
		</footer>
	);
};

export default Footer;
