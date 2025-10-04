import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import Button from "./Button";
import FormPopup from "./FormPopup";

const Form = () => {
	const [showPopup, setShowPopup] = useState(false);

	const [nameError, setNameError] = useState<boolean>(false);
	const [emailError, setEmailError] = useState<boolean>(false);
	const [messageError, setMessageError] = useState<boolean>(false);

	const [nameSuccess, setNameSuccess] = useState<boolean>(false);
	const [emailSuccess, setEmailSuccess] = useState<boolean>(false);
	const [messageSuccess, setMessageSuccess] = useState<boolean>(false);

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const handleInputName = (e: ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);
	const handleInpuEmail = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const handleInpuMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setMessage(e.target.value);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const trimEmailValue = email.trim().toLowerCase();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		const isValidEmail = emailRegex.test(trimEmailValue);

		const delayTime = (isError = true) => (isError ? 2000 : 750);

		if (name === "") {
			setNameError(true);

			setTimeout(() => {
				setNameError(false);
			}, delayTime());
		} else {
			setNameError(false);
			setNameSuccess(true);

			setTimeout(() => {
				setNameSuccess(false);
			}, delayTime(false));
		}

		if (!isValidEmail || trimEmailValue === "") {
			setEmailError(true);

			setTimeout(() => {
				setEmailError(false);
			}, delayTime());
		} else {
			setEmailError(false);
			setEmailSuccess(true);

			setTimeout(() => {
				setEmailSuccess(false);
			}, delayTime(false));
		}

		if (message === "") {
			setMessageError(true);

			setTimeout(() => {
				setMessageError(false);
			}, delayTime());
		} else {
			setMessageError(false);
			setMessageSuccess(true);

			setTimeout(() => {
				setMessageSuccess(false);
			}, delayTime(false));
		}

		if (name !== "" && isValidEmail && message !== "") {
			setTimeout(() => {
				setShowPopup(true);
			}, delayTime(false));
		}
	};

	return (
		<>
			<form
				className="w-full max-w-[445px] flex flex-col gap-2.5 text-white"
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<div className="w-full">
					<label htmlFor="name" className="sr-only">
						Name
					</label>
					<input
						type="text"
						id="name"
						placeholder="name"
						className={`w-full border-0 outline-0 py-2.5 pl-2.5 uppercase text-lg font-bold border-b-2 transition-colors duration-300 ${
							nameError
								? "border-b-danger-primary"
								: nameSuccess
								? "border-b-success-primary"
								: "border-b-grey-primary"
						} `}
						value={name}
						onChange={handleInputName}
					/>
					<p
						className={`text-danger-primary text-xs pl-2.5 mt-1 error-message ${
							nameError ? "opacity-100 active" : "opacity-0"
						}`}
					>
						<span style={{ "--i": 1 } as React.CSSProperties}>
							Please
						</span>{" "}
						<span style={{ "--i": 2 } as React.CSSProperties}>
							enter
						</span>{" "}
						<span style={{ "--i": 3 } as React.CSSProperties}>
							your
						</span>{" "}
						<span style={{ "--i": 4 } as React.CSSProperties}>
							name.
						</span>
					</p>
				</div>
				<div className="w-full">
					<label htmlFor="email" className="sr-only">
						Email
					</label>
					<input
						type="text"
						id="email"
						placeholder="email"
						className={`w-full border-0 outline-0 py-2.5 pl-2.5 uppercase text-lg font-bold border-b-2 transition-colors duration-300 ${
							emailError
								? "border-b-danger-primary"
								: emailSuccess
								? "border-b-success-primary"
								: "border-b-grey-primary"
						}`}
						value={email}
						onChange={handleInpuEmail}
					/>
					<p
						className={`text-danger-primary text-xs pl-2.5 mt-1 error-message ${
							emailError ? "opacity-100 active" : "opacity-0"
						}`}
					>
						<span style={{ "--i": 1 } as React.CSSProperties}>
							Please
						</span>{" "}
						<span style={{ "--i": 2 } as React.CSSProperties}>
							check
						</span>{" "}
						<span style={{ "--i": 3 } as React.CSSProperties}>
							your
						</span>{" "}
						<span style={{ "--i": 4 } as React.CSSProperties}>
							email.
						</span>
					</p>
				</div>
				<div className="w-full h-full max-h-[100px]">
					<label htmlFor="message" className="sr-only">
						Message
					</label>
					<textarea
						id="message"
						placeholder="message"
						className={`w-full h-full max-h-[90px] border-0 outline-0 py-2.5 pl-2.5 mb-0 uppercase text-lg font-bold border-b-2 transition-colors duration-300 ${
							messageError
								? "border-b-danger-primary"
								: messageSuccess
								? "border-b-success-primary"
								: "border-b-grey-primary"
						}`}
						value={message}
						onChange={handleInpuMessage}
					></textarea>
					<p
						className={`text-danger-primary text-xs pl-2.5 -mt-0.5 error-message ${
							messageError ? "opacity-100 active" : "opacity-0"
						}`}
					>
						<span style={{ "--i": 1 } as React.CSSProperties}>
							Please
						</span>{" "}
						<span style={{ "--i": 2 } as React.CSSProperties}>
							enter
						</span>{" "}
						<span style={{ "--i": 3 } as React.CSSProperties}>
							a
						</span>{" "}
						<span style={{ "--i": 4 } as React.CSSProperties}>
							message.
						</span>
					</p>
				</div>
				<div className="text-right">
					<Button
						isForm={true}
						text="send message"
						className="cursor-pointer uppercase"
					/>
				</div>
			</form>

			{showPopup && <FormPopup onClick={() => setShowPopup(false)} />}
		</>
	);
};

export default Form;
