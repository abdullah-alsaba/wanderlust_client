import DestinationDetailsCard from '@/components/DestinationDetailsCard/DestinationDetailsCard';
import { getDestinationDataById } from '@/lib/action';
import React from 'react';

const DestinationDetailsPage = async ({params}) => {
    const {id} = await params

    const destinationDetails = await getDestinationDataById(id)
    
    return (
      <div>
        
        <DestinationDetailsCard destinationDetails={destinationDetails} />
      </div>
    );
};

export default DestinationDetailsPage;