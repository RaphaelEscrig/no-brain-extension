import React, { useState } from "react";
import "./scss/Header.scss";

/** ASSETS */
import logo from "../../assets/no-brain.png";

/** ICONS */
import { HiMenuAlt2 } from "react-icons/hi";

const Header: React.FC = () => {
	const [closed, setClosed] = useState<boolean>(true);

  const handleClick = () => {
    setClosed(closed);
  }

	if (closed) {
		return (
			<header className="flex space-between closed">
				<button onClick={handleClick}>
					<HiMenuAlt2 />
				</button>
				<img src={logo} alt="logo" />
			</header>
		);
	}

	return <header></header>;
};

export default Header;
