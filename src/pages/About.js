import React, {useContext} from "react";
import WomenImg from "../img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import {CursorContext} from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
	return (
		<motion.section 
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}
    className="section ">
			<div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="container mx-auto h-full relative">
				<div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 ">
					<div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
						<img src={WomenImg} alt="" />
					</div>
					<div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start ">
						<h1 className="h1">About me</h1>
						<p className="mb-12 max-w-sm">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit.
							<b> Blanditiis nesciunt </b>
							Rerum voluptatem quibusdam veniam non dolorum beatae
							maxime praesentium culpa!
							<br />
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tenetur natus porro vero perspiciatis quia
							repellendus.
						</p>
						<Link to={"/portfolio"} className="btn">
							View my work
						</Link>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
