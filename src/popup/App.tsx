import React, { useEffect, useState } from "react";
import "./App.scss";

/** COMPONENTS */
import Header from "./components/Header/Header.component";
import TranslateArea from "./components/TranslateArea/TranslateArea.component";
import TranslatedText from "./components/TranslatedText/TranslatedText.component";

/** SERVICES */
import translateService from "./services/translate.service";

const App: React.FC = () => {
	const [inputText, setInputText] = useState("");
	const [translatedText, setTranslatedText] = useState("");

	useEffect(() => {
		const translated = translateService.translate(inputText);

		setTranslatedText(translated);
	}, [inputText]);

	const handleChange = (event: any) => {
		setInputText(event.target.value);

		let textareaElement: any = document.getElementById("textarea");

		if (textareaElement !== null) {
			textareaElement.style.height = "auto";
			textareaElement.style.height = textareaElement.scrollHeight + "px";
		}
	};

	return (
		<div id="app">
			<Header />

			<main>
				<div className="blue-background-corner"></div>
				<div className="grey-background-corner"></div>

				<TranslateArea text={inputText} changeCallback={handleChange} />

				<TranslatedText text={translatedText} />
			</main>
		</div>
	);
}

export default App;
