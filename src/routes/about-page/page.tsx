import { useLoaderData } from "react-router-dom";

const AboutPage = () => {
  const content = useLoaderData();

  console.log(content);
  return (
    <div className="text-3xl underline">
      <h1>AboutPage</h1>
    </div>
  );
};

export default AboutPage;
