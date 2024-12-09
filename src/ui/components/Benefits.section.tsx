// Components
import Button from "../components/Button";
import Slider from "../components/Slider/Slider";

const Benefits = () => {
  return (
    <section id="benefit" className="container relative mt-32 mb-24">
      <h1 className="h1 mb-16">
        Calculated, Tailored <br /> Marketing.
      </h1>
      <Slider className="mb-16" />
      <div className="w-full flex flex-col justify-center items-center">
        <p className="body-1 text-sm mb-4">
          let me tell you more about how life-changing this is.
        </p>
        <Button href="/contact" isRoute>
          contact me
        </Button>
      </div>
    </section>
  );
};

export default Benefits;
