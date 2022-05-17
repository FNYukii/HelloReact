import React from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from '../utilities/Firebase';

class ReadRealtime extends React.Component {

  state = {
    documents: []
  }

  listen() {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push(doc);
        console.log(`id: ${doc.id}, displayName: ${doc.data().displayName}, userName: ${doc.data().userName}`);
      });

      this.setState({
        documents: docs
      })
    });
  }

  componentDidMount() {
    this.listen();
  }

  render() {
    return (
      <main>
        <div className='large-container'>
          <h2>Read Realtime</h2>

        </div>
      </main>
    );
  }
}

export default ReadRealtime;