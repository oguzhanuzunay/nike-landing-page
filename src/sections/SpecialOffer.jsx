import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center 
    max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full rotate"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className=" mt-4 lg:maw-w-lg info-text">
          Indulge in luxury without breaking the bank with our Special Offer.
          Discover premium products at prices that are too good to resist. From
          stylish footwear to fashion essentials, our special deals cater to
          every taste and budget
        </p>
        <p className=" mt-6 lg:maw-w-lg info-text">
          Treat yourself or find the perfect gift for a loved one. Our Special
          Offer makes it all possible, delivering exceptional quality at an
          extraordinary value.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor={"bg-white"}
            borderColor={"border-slate-gray"}
            textColor={"text-slate-gray"}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
