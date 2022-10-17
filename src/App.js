import { useState } from 'react';
import './App.css';
import { app , database} from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

function App() {


  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");


  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput });

  };

  const handleSubmit = () => {
    addDoc(collectionRef, {
      email: data.email,
      password: data.password,
    })
    .then(() => {
      alert("Data added");
    })
    .catch((error)=> {
      alert(error.message);
    });
  };


  return (
    <div className="App">
     <input 
     name="email"
     placeholder="Email"
     onChange={(event) => handleInput(event)}
     />
     <input 
     name="password"
     placeholder="Password"
     onChange={(event) => handleInput(event)}
     />
      <button onClick={handleSubmit}>Log In</button>
    </div>
  );
}

export default App;
