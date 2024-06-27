import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa";
import MagicButton from "./ui/Magicbutton";

const Footer = () => {
  return (
    <section id="footer">
    <footer className="w-full pt-20 pb-10 dark:bg-black bg-black overflow-hidden"  id="contact">
      <div className="flex flex-col items-center">
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Always willing to learn more with new interest in the field of Cloud Computing and Data Analytics
        </p>
        <a href="https://drive.google.com/file/d/1DRZFmceAC7H6zy2n3MvFIbZO9SGNFdeq/view?usp=sharing">
          <MagicButton
            title="Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2024 Narendharan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
        <a href="https://github.com/narenv41">
          <MagicButton
          title="Github"
            icon={<FaGithub />}
            position="right"
            
          />
        </a>
          {/* LinkedIn icon */}
          <a href="https://www.linkedin.com/in/narendharan-velayudham/">
          <MagicButton
          title="Linkedin"
            icon={<FaLinkedin />}
            position="right"
          />
        </a>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
