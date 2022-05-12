import React from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import db from '../utilities/Firebase';

class Create extends React.Component {

  async create() {
    const docRef = await addDoc(collection(db, 'users'), {
      displayName: 'Ayumu',
      userName: 'Ayumu_Satonaka'
    });
    console.log('Document written with ID: ', docRef.id);
  }

  render() {
    return (
      <main>
        <h2>Create</h2>
        <button onClick={this.create}>Add</button>
      </main>
    );
  }
}

export default Create;