import { star } from "../assets/icons";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex flex-col max-container">
      <div className="flex flex-col items-center">
        <img src={imgURL} width={120} height={120} className=" rounded-full" />
      </div>
      <p className="info-text text-center mt-6">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <p className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </p>
    </div>
  );
}

export default ReviewCard;
