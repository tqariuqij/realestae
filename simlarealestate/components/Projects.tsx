import React from 'react';
import PropertyCard from './PropertyCard';

interface Props {}

const Projects = () => {
  return (
    <div className='container'>
      <div className='mb-6'>
        <h1 className='font-bold text-6xl py-4'>Latest Projects</h1>
      </div>
      <div className='lg:grid grid-cols-2'>
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default Projects;
