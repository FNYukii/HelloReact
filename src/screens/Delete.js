import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from "firebase/firestore";
import db from '../utilities/Firebase';

function Delete() {

  // Properties
  let { id } = useParams();
  const navigate = useNavigate();

  // Delete
  async function deleteUser() {
    await deleteDoc(doc(db, "users", id));
    navigate(-1);
  }
  
  // View
  return (
    <main>
      <div className='large-container'>
        <h2>Delete</h2>

        <p>id: {id}</p>
        
        <button onClick={deleteUser}>Delete</button>

      </div>
    </main>
  );
}

export default Delete;