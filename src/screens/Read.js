import React from 'react';

import { collection, getDocs } from "firebase/firestore";
import db from '../utilities/Firebase'

class Read extends React.Component {

  state = {
    documents: []
  }

  async read() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const documents = querySnapshot.docs;

    this.setState({
      documents: documents
    });
  }

  async componentDidMount() {
    this.read()
  }
  
  render() {

    return (
      <main>
        <div className='large-container'>
          <h2>Read</h2>

          <ul>
            {
              this.state.documents.map(document => (
                <li key={document.id}>{document.data().displayName}</li>
              ))
            }
          </ul>

        </div>
      </main>
    );
  }
  
}

export default Read;
