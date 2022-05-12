import React from 'react';
import Header from '../components/Header';

class Create extends React.Component {

  create() {
    // TODO: Create new document on Cloud Firestore
  }

  render() {
    return (
      <div>
        <Header index={2}/>
        <main>
          <h2>Create</h2>
        </main>
      </div>
    );
  }
}

export default Create;