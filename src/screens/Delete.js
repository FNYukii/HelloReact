import React from 'react';
import { useParams } from 'react-router-dom';

function Delete() {

  // Properties
  let { id } = useParams();
  
  // View
  return (
    <main>
      <div className='large-container'>
        <h2>Delete</h2>

        <p>id: {id}</p>
        

      </div>
    </main>
  );
}

export default Delete;