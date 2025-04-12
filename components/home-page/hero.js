import Image from "next/image";
import classes from "./hero.module.css";
import images from "../../public/images/site/images.jpg";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={images}
          alt="blog post owner img"
          width={300}
          height={300}
          className={classes.img}
        />
      </div>
      <h1 className={classes.h1}>Hi I'm Akshay</h1>
      <p className={classes.p}>
        This is Blog is all about my trading research i do and my trading
        insights
      </p>
    </section>
  );
};

export default Hero;
