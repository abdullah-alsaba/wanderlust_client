
import AddDestination from "@/components/AddDestination/AddDestination";
import { addDestination } from "@/lib/action";
import React from "react";

const AddDestinationPage = () => {

  return (
      <div>
          <AddDestination addDestination={addDestination} ></AddDestination>
    </div>
  );
};

export default AddDestinationPage;
