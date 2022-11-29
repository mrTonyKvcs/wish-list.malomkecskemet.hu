/* eslint-disable @next/next/no-img-element */

type Hero = {
  path: string;
  alt: string;
};

const Hero = ({ path }: Hero) => {
  return (
    <section>
      <img
        src={path}
        alt="Idén Karácsonykor a TE kívánságod is teljesülhet!"
        className="w-full h-auto"
      />
    </section>
  );
};

export default Hero;
