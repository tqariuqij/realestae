import React from 'react';

interface Props {}

const AgentCard = () => {
  return (
    <div
      className='rounded-lg bg-center bg-no-repeat bg-cover shadow-md max-w-full h-[30rem] m-6'
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/johnte/image/upload/v1659439258/cld-sample.jpg)',
      }}
    >
      <div>
        <p>this the agent card</p>
      </div>
    </div>
  );
};

export default AgentCard;
