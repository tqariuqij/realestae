import React from 'react';
import TestimonialCard from './TestimonialCard';

interface Props {}

const Testimonials = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='font-bold text-6xl py-6'>Testimonials</h1>
      </div>
      <div>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
