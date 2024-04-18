import { reviews } from "../constants"
import ReviewCard from "./ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
        <h3 className="text-center text-4xl font-palanquin font-bold">
            What Our
            <span className="text-coral-red"> Customers </span>
            Say?
        </h3>
        <p className="text-center mt-4 info-text m-auto max-w-lg">
            Hear ggenuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
            {reviews.map( review => (
                <ReviewCard 
                    key={review.customerName}
                    review={review}
                />
            ))}
        </div>
    </section>
  )
}

export default CustomerReviews