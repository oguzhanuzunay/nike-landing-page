import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div
      key={name}
      className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center"
    >
      <div className="relative group">
        <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] transition-transform transform scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity w-[280px] max-w-full">
          <button className="bg-coral-red text-white py-2 px-4 rounded-md font-montserrat text-lg hover:bg-Ff4040">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-8 flex justify-start items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating"
        />
        <p className="font-montserrat text-slate-gray  text-xl leading-normal">(4.5)</p>
      </div>

      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">{name}</h3>
      <p className="mt-2 text-2xl font-semibold text-coral-red leading-normal  font-montserrat ">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
