// Components
import Button from "../components/Button";
import Slider from "../components/Slider/Slider";

const Benefits = () => {
  return (
    <section id="benefit" className="container relative mt-32 mb-24">
      <h1 className="h1 mb-16">
        Video production <br /> services.
      </h1>
      <Slider className="mb-16" />
      <div className="w-full flex flex-col justify-center items-center">
        <Button href="/contact" isRoute>
          contact me
        </Button>
      </div>
    </section>
  );
};

export default Benefits;
