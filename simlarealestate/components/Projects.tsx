import React from 'react';
import PropertyCard from './PropertyCard';
import { rentData } from '../data/rentData';

interface Props {
  title: string;
  price: number;
}

const Projects = ({ properties }) => {
  console.log(properties);

  console.log(rentData);

  // const rentPayload = {
  //    rentData.title,
  //    rentData.price
  // };

  // console.log(rentPayload);
  return (
    <div className='container'>
      <div className='mb-6'>
        <h1 className='font-bold text-6xl py-4'>Latest Properties</h1>
      </div>
      <div className='lg:grid grid-cols-2'>
        {/* {properties.slice(0, 2).map((property: any) => (
          <PropertyCard rent={property} />
        ))} */}
      </div>
    </div>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const data = rentData;

  return {
    props: { properties: data },
  };
};
