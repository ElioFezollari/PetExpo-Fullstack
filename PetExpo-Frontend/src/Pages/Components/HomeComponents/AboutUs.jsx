import {  textAnimation } from "../../../Variants";
import dogIcon from '../../../assets/dog-icon.svg'
import dog from "../../../assets/dog2.webp";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div id="about-us">
      <div className="about-us-image-wrapper">
        <div className="responsive-div">
        <motion.img className="responsive-div"  variants={textAnimation} initial='hidden' whileInView='visible' viewport={{once:true}} src={dog} alt="picture of a dog laying on a mat" />
        <motion.img variants={textAnimation} initial='hidden' whileInView='visible' viewport={{once:true}} transition={{delay:0.2}} className="dog-icon"alt="dog-icon" src={dogIcon}/>
        </div>
      </div>
      <div>
        <div className="about-us-text">
        <motion.h3 viewport={{once:true}} variants={textAnimation} initial='hiddenPositive' whileInView='visible'>About Us</motion.h3>
        <motion.p className="responsive-paragraph"  viewport={{once:true}} variants={textAnimation} transition={{delay:0.1}} initial='hiddenY' whileInView='visible'>
          Welcome to PetExpo, where our love for animals knows no bounds. We're
          a passionate team dedicated to celebrating the beauty and charm of our
          beloved furry and feathered friends. Through captivating images and
          heartwarming stories, we aim to showcase the unique personalities and
          incredible diversity found in every cat, dog, and bird. Our collection
          of photos captures the essence of companionship, playfulness, and
          unconditional love shared between pets and their humans. From the
          mischievous antics of curious kittens to the loyal devotion of
          faithful dogs, each image tells a story that warms the heart and
          sparks joy. But we're not just about pretty pictures. We're also
          committed to promoting animal welfare and responsible pet ownership.
          Through informative articles and resources, we strive to educate our
          audience on important topics such as adoption, health care, and the
          importance of providing loving homes for all animals, great and small.
        </motion.p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
