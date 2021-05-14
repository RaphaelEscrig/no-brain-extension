import React from "react";
import "./scss/TranslatedText.scss";

/** ICNONS */
import { FaWifi } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

interface IProps {
	text: string;
}

const TranslatedText: React.FC<IProps> = ({ text }) => {
	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(text);
	};

	return (
		<>
			<div className="translated-area-background"></div>
			<div className="translated-text">
				<div className="flex translated-header">
					<FaWifi />

					<span>No brain</span>

					{/* <div> */}
						<button onClick={handleCopyToClipboard}>
							<FiCopy />
						</button>
					{/* </div> */}
				</div>
				<p>{text.length === 0 ? "Veuilez entrer un texte à traduire" : text}</p>
			</div>
		</>
	);
};

export default TranslatedText;
