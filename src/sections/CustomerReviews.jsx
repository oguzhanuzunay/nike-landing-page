import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red "> Connoisseurs </span>Say?
      </h3>
      <p className=" mt-4 lg:maw-w-lg info-text text-center">
        Gain valuable insights and heartfelt testimonials from our discerning
        clientele, as they share their experiences with our products and
        services.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
