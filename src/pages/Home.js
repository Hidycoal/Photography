import React, { useContext } from "react";
import { Link } from "react-router-dom";
import WomanImg from "../img/home/woman.png";

import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition1}
			className="section "
		>
			<div className="container mx-auto h-full relative">
				<div className="flex flex-col justify-center ">
					<motion.div
						initial={{ opacity: 0, y: "-50%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-50%" }}
						transition={transition1}
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler}
						className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start "
					>
						<h1 onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler} className="h1 sm:flex sm:flex-col sm:items-center sm:gap-4 sm:mt-[-30px]   xs:flex xs:flex-col xs:items-center  xs:text-[35px] lg:flex lg:flex-col lg:items-start lg:mt-[30px] lg:text-[90px]" >
							<p >Photographer </p>
							<p>& Content Creator</p>
						</h1>
						<p onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler} className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
							Ilorin, Nigeria.
						</p>
						<Link onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler} to={"/contact"} className="btn mb-[30px]">
							hire me
						</Link>
					</motion.div>
					<div className="flex justify-end max-h-96 lg:max-h-max">
						<motion.div
							onMouseEnter={mouseEnterHandler}
							onMouseLeave={mouseLeaveHandler}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							transition={transition1}
							className="relative lg:-right-40 overflow-hidden"
						>
							<motion.img
								whileHover={{ scale: 1.1 }}
								transition={transition1}
								src={WomanImg}
								alt=""
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Home;
