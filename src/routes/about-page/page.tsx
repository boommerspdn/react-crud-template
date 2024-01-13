import { useGetPost } from "@/hooks/use-post";

const AboutPage = () => {
  const { data } = useGetPost("145bd5cd-4b0f-4841-9783-5fafdd996520");
  console.log(data);
  return (
    <div className="text-3xl underline">
      <h1>AboutPage</h1>
    </div>
  );
};

export default AboutPage;
