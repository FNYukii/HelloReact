import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Update(props) {

  let { id } = useParams();
  const [displayName, setDisplayName] = useState('');
  const [userName, setUserName] = useState('');

  const onInputDisplayName = (e) => {
    setDisplayName(e.target.value);
  }

  const onInputUserName = (e) => {
    setUserName(e.target.value);
  }

  const update = () => {
    // TODO: Update
  }

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