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
};

export default ReadRealtime;