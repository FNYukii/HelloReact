import React from 'react';
import { useParams } from 'react-router-dom';

function Update(props) {

  let { id } = useParams();

  return (
    <main>
      <div className='large-container'>
        <h2>Update</h2>

        <p>DocumentID: {id}</p>

      </div>
    </main>
  );
}

export default Update;