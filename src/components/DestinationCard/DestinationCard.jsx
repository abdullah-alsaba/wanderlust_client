import React from 'react';

const DestinationCard = ({ destination }) => {
const {
  country,
  description,
  imageUrl,
  departureDate,
  duration,
  price,
  category,
  destinationName
} = destination;





    return <div>
        <h1>{country}</h1>
  </div>;
};

export default DestinationCard;