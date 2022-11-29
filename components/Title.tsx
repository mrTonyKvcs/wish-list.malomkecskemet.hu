type Title = {
  text: string;
};

const Title = ({ text }: Title) => {
  return <h3 className="mt-10 text-center section__title md:mt-0">{text}</h3>;
};

export default Title;
