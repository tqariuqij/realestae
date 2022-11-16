import React from 'react';
import PropertyCard from './PropertyCard';
import { rentData } from '../data/rentData';
import { client } from '../lib/client';

interface Props {
  title: string;
  price: number;
}

const Projects = (props) => {
  console.log(props);

  return (
    <div className='container'>
      <div className='mb-6'>
        <h1 className='font-bold text-6xl py-4'>Latest Properties</h1>
      </div>
      <div className='lg:grid grid-cols-2'>
        {/* {properties.slice(0, 2).map((property: any) => (
          <PropertyCard rent={property} />
        ))} */}

        {/* {houses.map((house) => house.name)} */}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "houses"]';

  const houses = await client.fetch(`*[_type == "houses"]`);

  const query1 = '*[_type == "land"]';

  const lands = await client.fetch(query1);

  const error = 'Did not fetch data';

  console.log({ houses, lands });

  if (!houses) return { props: error, notFound: true };
  else
    return {
      props: {
        data: {
          name: houses,
        },
      },
    };
};
export default Projects;
