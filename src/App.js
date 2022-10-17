import { useState } from 'react';
import './App.css';
import { app , database} from './firebaseConfig';
import { collection, 
  addDoc, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

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

  const getData = () => {
    getDocs(collectionRef)
    .then((response) => {
      console.log(response.docs.map((item) => {
        return {...item.data(), id: item.id};
      }));
    })
  };

  const updateData = () => {
    const docToUpdate = doc(database, "users", "BHMCAjqB23U22VzlIlgO");
    updateDoc(docToUpdate, {
      email: "kaifrahman@gmail.com",
      password: 123
    })
    .then(()=> {
      alert("Data updated");
    })
    .catch((error)=> {
      alert(error.message);
    })
  };
  
  const deleteData = () => {
    const docToUpdate = doc(database, "users", "BHMCAjqB23U22VzlIlgO");
    deleteDoc(docToUpdate, {
    })
    .then(()=> {
      alert("Data deleted");
    })
    .catch((error)=> {
      alert(error.message);
    })
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
      <button onClick={getData}>Get Data</button>
      <button onClick={updateData}>Update Data of ID 1</button>
      <button onClick={deleteData}>Delete Data of ID 1</button>
    </div>
  );
}

export default App;
