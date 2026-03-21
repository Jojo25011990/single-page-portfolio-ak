type ButtonProps = {
	text?: string;
	className?: string;
	isForm: boolean;
	blank?: string;
	rel?: string;
	ariaLabel?: string;
};

const Button = ({
	text = "Contact Me",
	className = "",
	isForm = false,
	blank,
	rel,
	ariaLabel,
}: ButtonProps) => {
	return isForm ? (
		<button
			type="submit"
			className={`font-bold text-white text-base leading-6.5 tracking-[2.29px] pb-2.5 btn-primary ${className}`}
		>
			{text}
			<span></span>
		</button>
	) : (
		<a
			href="#contact"
			className={`font-bold text-white text-base leading-6.5 tracking-[2.29px] pb-2.5 btn-primary ${className}`}
			target={blank}
			rel={rel}
			aria-label={ariaLabel}
		>
			{text}
			<span></span>
		</a>
	);
};

export default Button;
