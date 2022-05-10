import { collection, getDocs } from "firebase/firestore";
import db from '../utilities/Firebase'

function App() {
  
  async function read() {
    const querySnapshot = await getDocs(collection(db, "memos"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  return (
    <div className="App">
      <h1>Hello world.</h1>
      <button onClick={read}>Read</button>
    </div>
  );
}

export default App;
