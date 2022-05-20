import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import db from '../utilities/Firebase';

function Delete() {

  // Properties
  let { id } = useParams();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [userName, setUserName] = useState('');

  // Read
  async function read() {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDisplayName(docSnap.data().displayName);
      setUserName(docSnap.data().userName);
    } else {
      console.log("No such document!");
    }
  }

  // Delete
  async function deleteUser() {
    await deleteDoc(doc(db, "users", id));
    navigate(-1);
  }

  useEffect(() => {
    read();
    //eslint-disable-next-line
  }, []);
  
  // View
  return (
    <main>
      <div className='large-container'>
        <h2>Delete</h2>

        <p>Document ID : {id}</p>
        <p>Display name : {displayName}</p>
        <p>User name : {userName}</p>

        <button onClick={deleteUser}>Delete</button>

      </div>
    </main>
  );
}

export default Delete;