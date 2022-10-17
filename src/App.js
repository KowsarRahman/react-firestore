import { useState } from 'react';
import './App.css';
import { app , storage} from './firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function App() {


  const [data, setData] = useState({});


  

  const handleSubmit = () => {
    const storageRef = ref(storage, data.name);
    const uploadTask = uploadBytesResumable(storageRef, data);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    ()=> {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    })
  };

  


  return (
    <div className="App">
     <input 
     type="file"
     onChange={(event) => setData(event.target.files[0])}
     />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default App;
