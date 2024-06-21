import { useState } from "react";
import { textAnimation } from "../../../Variants";
import catIcon from '../../../assets/cat-icon.svg'
import { motion } from "framer-motion";
const ContactUs = () =>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [lName,setLName] = useState('')
    const [message,setMessage] = useState('')
    return(
        <div id="contact-us">
            <div className="contact-us-wrapper">
            <div className="contact-us-content">
                <div className="message">
                <motion.h3 variants={textAnimation} viewport={{once:true}} initial='hidden' whileInView='visible'>Contact Us</motion.h3>
                    <div>
                        <form action="">
                            <div >
                            <motion.label variants={textAnimation} initial='hidden' whileInView='visible' viewport={{once:true}}  >First Name:{' '} 
                                <input type="text" typeof="text" value={name} onChange={(e)=>setName(e.target.value)} />
                            </motion.label >
                            <motion.label  variants={textAnimation} initial='hidden' whileInView='visible' transition={{delay:0.1}} viewport={{once:true}} >Last Name:{' '} 
                                <input type="text" typeof="text" value={lName} onChange={(e)=>setLName(e.target.value)} />
                            </motion.label>
                            <motion.label className="email-label" variants={textAnimation} initial='hidden' whileInView='visible' transition={{delay:0.2}} viewport={{once:true}}>Email:{' '} 
                                <input type="email" typeof="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </motion.label>
                            </div>
                            <motion.label variants={textAnimation} viewport={{once:true}} initial='hidden' whileInView='visible'> Message: 
                                <textarea value={message} onChange={((e)=>setMessage(e.target.value))}/>
                            </motion.label>
                            <motion.div variants={textAnimation} viewport={{once:true}} initial='hidden' whileInView='visible'>
                            <motion.input type="submit" value='Send' />
                            </motion.div>
                        </form>
                    </div>
                </div>
                <motion.div className="contact" variants={textAnimation} viewport={{once:true}} initial='hiddenY' whileInView='visible'>
                    <motion.img variants={textAnimation} initial='hidden' whileInView='visible' viewport={{once:true}} transition={{delay:0.2}} src={catIcon} className="cat-icon" alt="cat-icon" />
                </motion.div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs