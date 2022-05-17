import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from '../utilities/Firebase'

function Read() {

  const[documents, setDocuments] = useState([])

  async function read() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const documents = querySnapshot.docs;

    documents.forEach((doc) => {
      console.log(`id: ${doc.id}, displayName: ${doc.data().displayName}, userName: ${doc.data().userName}`);
    });

    setDocuments(documents);
  }

  useEffect(() => {
    read();
  }, []);

  return (
    <main>
      <div className='large-container'>
        <h2>Read</h2>

        <ul>
          {
            documents.map(document => (
              <li key={document.id}>{document.data().displayName}</li>
            ))
          }
        </ul>

      </div>
    </main>
  );


}


export default Read;
