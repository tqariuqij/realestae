import React from 'react';
import AgentCard from './AgentCard';

interface Props {}

const Agents = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='font-bold text-6xl py-6'>Agents</h1>
      </div>
      <div>
        <div>
          <AgentCard />
          <AgentCard />
          <AgentCard />
        </div>
      </div>
    </div>
  );
};

export default Agents;
