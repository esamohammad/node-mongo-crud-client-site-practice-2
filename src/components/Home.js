import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
   const users = useLoaderData();
   return (
      <div>
         <h2>Total User:- {users.length}</h2>
         {
            users.map(user=><p key={user._id}>{user.name} {user.roll} {user.email}</p>)
         }
      </div>
   );
};

export default Home;