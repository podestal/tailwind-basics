import { services } from "../constants"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section className='max-container flex flex-col justify-center flex-wrap gap-9 lg:flex-row'>
        {services.map( service => (
            <ServiceCard 
                key={service.label}
                service={service}
            />
        ))}
    </section>
  )
}

export default Services