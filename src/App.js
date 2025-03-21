import React, { useContext, useState } from "react";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { CursorContext } from "./context/CursorContext";


const App = () => {
  const { cursorVariants, cursorBG, setCursorBG } = useContext(CursorContext);
	return (
		<>
			<Router>
				<Header />
				<AnimRoutes />
			</Router>
			{/* cursor */}
			<motion.div 
      variants={cursorVariants}
      animate={cursorBG}
      className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 z-50 pointer-events-none rounded-full"></motion.div>
		</>
	);
};

export default App;
