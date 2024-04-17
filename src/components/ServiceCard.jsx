import React from 'react'

const ServiceCard = ({ service }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-10 py-16 shadow-3xl'>
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
            <img src={service.imgURL} alt={service.label} width={24} height={24} />
        </div>
        <h3 className='mt-3 font-palanquin font-bold text-3xl'>{service.label}</h3>
        <p className='mt-3 font-montserrat text-lg leading-normal text-slate-gray break-words'>{service.subtext}</p>
    </div>
  )
}

export default ServiceCard