import DestinationCard from '@/components/DestinationCard/DestinationCard';
import { getDestinationData } from '@/lib/action';
import React from 'react';

const DestinationPage = async () => {

    const destinations = await getDestinationData()
    
   



    return (
      <div>
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    );
};

export default DestinationPage;