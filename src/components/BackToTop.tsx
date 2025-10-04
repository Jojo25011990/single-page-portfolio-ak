import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const BackToTop = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.scrollY + window.innerHeight >=
				document.body.offsetHeight - 10
			) {
				setShow(true);
			} else {
				setShow(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<a
			href="#"
			className={`absolute right-5 bottom-5 z-50 w-10 h-10 flex justify-center items-center border border-white rounded-[50%] hover:text-success-primary hover:border-success-primary active:text-success-primary active:border-success-primary transition-all duration-500 scale-0 opacity-0 btn-to-top ${
				show ? "scale-100 opacity-100" : "scale-0 opacity-0"
			}`}
		>
			<FaArrowUp />
		</a>
	);
};

export default BackToTop;
