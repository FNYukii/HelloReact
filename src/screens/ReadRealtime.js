import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import db from '../utilities/Firebase';

function ReadRealtime() {

  const [documents, setDocuments] = useState([])

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc);
        console.log(`id: ${doc.id}, displayName: ${doc.data().displayName}, userName: ${doc.data().userName}`);
      });

      setDocuments(docs);
    });

    return () => {
      unsubscribe();
    };
    
  }, []);

  return (
    <main>
      <div className='large-container'>
        <h2>Read Realtime</h2>

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
};

export default ReadRealtime;