import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import db from '../utilities/Firebase';
import '../styles/create.css';

function Create() {

  const[displayName, setDisplayName] = useState('');
  const[userName, setUserName] = useState('');

  const onInputDisplayName = (e) => {
    setDisplayName(e.target.value);
  }

  const onInputUserName = (e) => {
    setUserName(e.target.value);
  }

  const create = () => {
    if (displayName !== '' && userName !== '') {
      const docRef = addDoc(collection(db, 'users'), {
        displayName: displayName,
        userName: userName
      });

      console.log('Document written with ID: ', docRef.id);
      alert('Document creation successfull.');
    } else {
      alert('Document creation failed.');
    }

    setDisplayName('');
    setUserName('');
  }

  return (
    <main>
      <div className='large-container'>
        <h2>Create</h2>

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

        <button onClick={create}>Add</button>

      </div>
    </main>
  );

}

export default Create;