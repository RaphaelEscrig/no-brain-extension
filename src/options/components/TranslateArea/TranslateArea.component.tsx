import React from "react";
import "./scss/TranslateArea.scss";

/** ICNONS */
import { FaWifi } from "react-icons/fa";

interface IProps {
	text: string;
	changeCallback: (event: any) => void;
}

const TranslateArea: React.FC<IProps> = ({ text, changeCallback }) => {
	return (
		<>
			<div className="translate-area">
				<div className="flex translate-header">
					<FaWifi />

          <span>Français</span>
				</div>

				<div className="area-container">
					<textarea
						id="textarea"
						rows={2}
						placeholder="Texte à transformer"
						value={text}
						onChange={changeCallback}
					/>
				</div>
			</div>
			<div className="translate-area-background"></div>
		</>
	);
};

export default TranslateArea;
