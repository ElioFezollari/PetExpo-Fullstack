import dog from "../../../assets/dog.webp";
import cat from "../../../assets/cat.webp";
import bird from "../../../assets/bird.webp";

import eagle from "../../../assets/eagle.mp4";
import { useState } from "react";
import { motion } from "framer-motion";
import { cardAnimation, textAnimation } from "../../../Variants";
import { Link } from "react-router-dom";

const Hero = () => {
  const animals = [
    { name: "dog", src: dog, alt: "Picture of a dog" },
    { name: "cat", src: cat, alt: "Picture of a cat" },
    { name: "bird", src: bird, alt: "Picture of a bird" },
  ];
  const [animalHovered, setAnimalHovered] = useState(false);

  const handleAnimalHover = (animal) => {
    setAnimalHovered(animal);
  };

  return (
    <section className="hero">
      <div className="hero-text-wrapper">
        <motion.div variants={textAnimation} initial="hidden" animate="visible">
          <h3>Browse through some of the most amazing animals.</h3>
          <p>Pick one of the following galleries to view the animal</p>
          <ul>
            <li>
              <Link
                to="dogs"
                onMouseEnter={() => handleAnimalHover("dog")}
                onMouseLeave={() => handleAnimalHover(false)}
              >
                Dogs
              </Link>
            </li>
            <li>
              <Link
                to="cats"
                onMouseEnter={() => handleAnimalHover("cat")}
                onMouseLeave={() => handleAnimalHover(false)}
              >
                Cats
              </Link>
            </li>
            <li>
              <Link
                to="birds"
                onMouseEnter={() => handleAnimalHover("bird")}
                onMouseLeave={() => handleAnimalHover(false)}
              >
                Birds
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="hero-img-wrapper">
        <motion.div className="hero-img">
          <motion.video
            autoPlay
            muted
            loop
            src={eagle}
            variants={cardAnimation}
            initial="hidden"
            animate={animalHovered === false ? "visible" : "hidden"}
          ></motion.video>
          {animals.map((animal, index) => (
            <motion.img
              key={index}
              variants={cardAnimation}
              initial="hidden"
              animate={animalHovered === animal.name ? "visible" : "hidden"}
              src={animal.src}
              alt={animal.alt}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
