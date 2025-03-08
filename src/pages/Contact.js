import React, { useContext } from "react";
import WomanImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import { toast } from 'react-toastify';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b4890644-f147-4ebf-905f-de7df4f8736c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);

      toast.error(data.message);
      setResult("");
    }
  };
	return (
		<motion.section
			initial={{ opacity: 0, y: "100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={transition1}
			className="section bg-white"
		>
      <ToastContainer/>
			<div className="container mx-auto h-full">
				<div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
					<motion.div
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "100%" }}
						transition={transition1}
						className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
					></motion.div>
					<div
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler}
						className="lg:flex-1 lg:pt-32 px-4"
					>
						<h1 className="h1">Contact me</h1>
						<p
							className="mb12
          "
						>
							I would love to hear from you
						</p>
						<form onSubmit={onSubmit} className="flex flex-col gap-y-4">
							<div className="flex gap-x-10">
								<input
									className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
									type="text"
									name='Name' placeholder='Your Name' required
								/>
								<input
									className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
									type="email"
									name='Email' placeholder='Your Email' required
								/>
							</div>
							<input
								className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
								type="text"
								placeholder="Your message"
							/>
							<button className="btn mb-[30px] mx-auto lg:mx-0 self-start">{result ? result : "Send Message"}
							</button>
						</form>
					</div>
					<motion.div
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "100%" }}
						transition={{ transition: transition1, duration: 1.5 }}
						className="lg:flex-1"
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler}
					>
						<img src={WomanImg} alt="" />
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
