import FormPopupEnve from "./FormPopupEnve";

type FormPopupProps = {
	onClick: () => void;
};

const FormPopup = ({ onClick }: FormPopupProps) => {
	return (
		<div
			className="fixed top-0 left-0 z-[999] w-full h-full flex items-center justify-center bg-dark-overlay overflow-hidden overlay"
			onClick={onClick}
		>
			<FormPopupEnve />
		</div>
	);
};

export default FormPopup;
