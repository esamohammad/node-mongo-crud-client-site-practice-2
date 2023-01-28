import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
   
   const user = useLoaderData();


   return (
      <div>
         <h2>Please Update: {user.name}</h2>
      </div>
   );
};

export default Update;