import { useState } from 'react';
import './App.css';
import { app , database} from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";

function App() {

  let auth = getAuth();

  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput });

  };

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      console.log(response.user);
    })
    .catch((error) => {
      console.log(alert(error.message));
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
