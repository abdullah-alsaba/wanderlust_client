

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



    return data

};
