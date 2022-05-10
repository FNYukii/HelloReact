import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../utilities/Firebase'

class ReadView extends React.Component {

  read = async () => {
    const querySnapshot = await getDocs(collection(db, "memos"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  
  render() {
    const read = this.read()

    return (
      <div>
        <h1>Read</h1>
        <button onClick={read}>Read</button>
      </div>
    );
  }
  
}

export default ReadView;
