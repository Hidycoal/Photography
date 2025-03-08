import React, { useContext } from "react";
import { ImFacebook, ImTwitter, ImInstagram, ImGithub } from "react-icons/im";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
	return (
		<div
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			className="hidden xl:flex ml-24"
		>
			<ul className="flex gap-x-4">
				<li>
					<a href="https://www.facebook.com/hidycoal" target="_blank">
						<ImFacebook />
					</a>
				</li>
				<li>
					<a href="https://www.twitter.com/hidycoal" target="_blank">
						<ImTwitter />
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/hidycoal"
						target="_blank"
					>
						<ImInstagram />
					</a>
				</li>
				<li>
					<a href="https://www.github.com/hidycoal" target="_blank">
						<ImGithub />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
