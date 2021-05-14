class translateService {
	private transformChar = (char: string): string => {
		const incrementor: number = 32;
		const asciiValue: number = char.charCodeAt(0);
		const random: number = Math.floor(Math.random() * 2);

		if (
			((asciiValue >= 65 && asciiValue <= 90) ||
				(asciiValue >= 97 && asciiValue <= 122)) &&
			random === 1
		) {
			if (asciiValue < 97) {
				// console.log(String.fromCharCode(asciiValue + incrementor, asciiValue + incrementor));
				return String.fromCharCode(asciiValue + incrementor);
			} else {
				// console.log(asciiValue - incrementor, String.fromCharCode(asciiValue  - incrementor))
				return String.fromCharCode(asciiValue - incrementor);
			}
		} else {
			return char;
		}
	};

	public translate = (textToTranslate: string): string => {
		let translatedText: string = "";

		if (textToTranslate.length === 0) {
			return "";
		}

		for (let i = 0; i < textToTranslate.length; i++) {
			translatedText = translatedText.concat(
				this.transformChar(textToTranslate[i])
			);
		}

		return translatedText;
	};
}

export default new translateService();
