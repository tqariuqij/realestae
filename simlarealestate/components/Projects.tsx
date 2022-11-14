import React from 'react';
import PropertyCard from './PropertyCard';
import { rentData } from '../data/rentData';
import { client } from '../lib/client';

interface Props {
  title: string;
  price: number;
}

const Projects = ({ houses }) => {
  console.log(houses);

  return (
    <div className='container'>
      <div className='mb-6'>
        <h1 className='font-bold text-6xl py-4'>Latest Properties</h1>
      </div>
      <div className='lg:grid grid-cols-2'>
        {/* {properties.slice(0, 2).map((property: any) => (
          <PropertyCard rent={property} />
        ))} */}

        {houses.map((house) => house.name)}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "houses"]';

  const housesForSale = await client.fetch(query);

  const query1 = '*[_type == "land"]';

  const landForSale = await client.fetch(query1);

  return {
    props: { houses },
  };
};
export default Projects;
