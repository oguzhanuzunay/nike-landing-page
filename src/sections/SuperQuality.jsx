import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex max-container max-lg:flex-row gap-10 justify-between items-center max-sm:flex-col-reverse"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className=" mt-4 lg:maw-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and a touch of elegance
        </p>
        <p className=" mt-6 lg:maw-w-lg info-text">
          Our dedication detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center ">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain rotate"
        />
      </div>
    </section>
  );
}

export default SuperQuality;