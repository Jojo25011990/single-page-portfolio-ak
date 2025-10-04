import { useState } from "react";
import type { MouseEvent } from "react";

const FormPopupEnve = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setIsOpen(true);
	};

	return (
		<div className="envelope">
			<div
				className={`envelope__top-side ${isOpen ? "is-open" : ""}`}
			></div>
			<div className="envelope__left-side"></div>
			<div className="envelope__right-side"></div>
			<div className="envelope__bottom-side"></div>

			<div className={`envelope__letter ${isOpen ? "is-open" : ""}`}>
				<h5>Hi Everyone!</h5>
				<p>
					I want to thank <strong>Frontend Mentor</strong> for the
					amazing challenges that helped me grow my skills and better
					understand frontend development.
				</p>

				<h6 className="my-name">Web.Animations.And.Effects</h6>

				<div className="envelope__letter-lines">
					<div className="line-01">
						<p>Click everywhere</p>
					</div>
					<div className="line-02">
						<p>close nearby</p>
					</div>
					<div className="line-03">
						<p>popup</p>
					</div>
				</div>
			</div>

			<button className="cursor-pointer" onClick={handleClick}>
				<div
					className={`envelope__heart ${isOpen ? "is-open" : ""}`}
				></div>
			</button>
		</div>
	);
};

export default FormPopupEnve;
