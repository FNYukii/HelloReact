import { collection, getDocs } from "firebase/firestore";
import db from '../utilities/Firebase'

function ReadView() {
  
  async function read() {
    const querySnapshot = await getDocs(collection(db, "memos"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  return (
    <div>
      <h1>Read</h1>
      <button onClick={read}>Read</button>
    </div>
  );
}

export default ReadView;
