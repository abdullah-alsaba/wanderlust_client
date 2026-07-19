import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";


export const addDestination = async (formData) => {
    'use server'

    

    const destination = Object.fromEntries(formData.entries());


    const res = await fetch("http://localhost:7000/destination", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(destination),
    });
    
    const data = await res.json()

    if (data.insertedId) {
        revalidatePath('/destination')
    }



    return data

};

export const getDestinationData = async () => {
    const res = await fetch("http://localhost:7000/destination");
    const data = await res.json()
    return data 
}


export const getDestinationDataById = async (id) => {
    const res = await fetch(
      `http://localhost:7000/destination/${id}`,
    );
    const data = await res.json()
  
    return data 
}



