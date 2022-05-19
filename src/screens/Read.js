import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from '../utilities/Firebase';
import '../styles/read.css';

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

        <ul className='user-list'>
          {
            documents.map(document => (
              <div key={document.id} className='card'>

                <p className='display-name'>{document.data().displayName}</p>
                <p className='user-name'>@{document.data().userName}</p>

                <a href={'/update/' + document.id} className='update-link'>Update</a>
                <a href='/' className='delete-link'>Delete</a>
              </div>
            ))
          }
        </ul>

      </div>
    </main>
  );

}

export default Read;
