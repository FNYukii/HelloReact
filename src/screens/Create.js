import React from 'react';
import { collection, addDoc } from 'firebase/firestore'; 
import db from '../utilities/Firebase';

class Create extends React.Component {

  constructor() {
    super();
    this.state = {
      displayName: '',
      userName: ''
    };
  }

  onChangeDisplayName(event) {
    this.setState({
      displayName: event.target.value
    });
  }

  onChangeUserName(event) {
    this.setState({
      userName: event.target.value
    });
  }

  async create() {
    const docRef = await addDoc(collection(db, 'users'), {
      displayName: 'Ayumu',
      userName: 'Ayumu_Satonaka'
    });
    console.log('Document written with ID: ', docRef.id);
  }

  render() {

    const onChangeDisplayName = (event) => this.onChangeDisplayName(event);
    const onChangeUserName = (event) => this.onChangeUserName(event);

    return (
      <main>
        <h2>Create</h2>

        <form>
          <input value={this.state.displayName} onChange={onChangeDisplayName}/>
          <input value={this.state.userName} onChange={onChangeUserName}/>
        </form>

        <button onClick={this.create}>Add</button>
      </main>
    );
  }
}

export default Create;