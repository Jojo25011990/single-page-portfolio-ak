type ButtonProps = {
	text?: string;
	className?: string;
	isForm: boolean;
};

const Button = ({
	text = "Contact Me",
	className = "",
	isForm = false,
}: ButtonProps) => {
	return isForm ? (
		<button
			type="submit"
			className={`font-bold text-white text-base leading-[26px] tracking-[2.29px] pb-2.5 btn-primary ${className}`}
		>
			{text}
			<span></span>
		</button>
	) : (
		<a
			href="#contact"
			className={`font-bold text-white text-base leading-[26px] tracking-[2.29px] pb-2.5 btn-primary ${className}`}
		>
			{text}
			<span></span>
		</a>
	);
};

export default Button;
