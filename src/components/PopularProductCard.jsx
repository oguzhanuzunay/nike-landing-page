import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div key={name} className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start items-center gap-2.5">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="font-montserrat text-slate-gray  text-xl leading-normal">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold text-coral-red leading-normal  font-montserrat ">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
