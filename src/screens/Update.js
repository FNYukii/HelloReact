import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from '../utilities/Firebase';

function Update(props) {

  // Values
  let { id } = useParams();
  const [displayName, setDisplayName] = useState('');
  const [userName, setUserName] = useState('');

  // OnChanges
  const onInputDisplayName = (e) => {
    setDisplayName(e.target.value);
  }

  const onInputUserName = (e) => {
    setUserName(e.target.value);
  }

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

  // Update
  async function update() {
    const washingtonRef = doc(db, "users", id);

    await updateDoc(washingtonRef, {
      displayName: displayName,
      userName: userName
    });
  }

  useEffect(() => {
    read();
  }, []);

  return (
    <main>
      <div className='large-container'>
        <h2>Update</h2>

        <p>Document ID : {id}</p>

        <form>
          <div className='form-item'>
            <span>Display name</span>
            <input value={displayName} onChange={onInputDisplayName}/>
          </div>

          <div className='form-item'>
            <span>User name</span>
            <input value={userName} onChange={onInputUserName}/>
          </div>

        </form>

        <button onClick={update}>Update</button>

      </div>
    </main>
  );
}

export default Update;