import React, { Fragment, useState ,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../stores/Context';
import { getStorage } from 'firebase/storage';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";

const Create = () => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const [name,setName] = useState('');
  const [category,setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image,setImage] = useState(null);
  const storage = getStorage(firebase);
  const db = getFirestore(firebase);
  const date = new Date();

  const handlesubmit = async ()=> {
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      try {
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        console.log("File uploaded successfully:", downloadURL);
        const postRef = collection(db, 'products');
        /*await setDoc(doc(db, "products", user.uid), {
          name: name,
          category: category,
          price:price,
          url:downloadURL,
          userId:user.uid,
          createdAt: date.toDateString()
        }).then(()=> {navigate('/')});
*/
        await addDoc(postRef, {
          name: name,
          category: category,
          price:price,
          url:downloadURL,
          userId:user.uid,
          createdAt: date.toDateString()
        }).then(()=> {navigate('/')});;
      } catch (error) {
        alert(error.message);
      }
    }
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              id="fname"
              name="Name"
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
              id="category"
              name="category"
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input className="input" type="number" id="price" value={price} name="Price"  onChange={(e) => setPrice(e.target.value)}/>
            <br />
          <br />
          <img alt="" width="200px" height="200px" src={ image ? URL.createObjectURL(image) : ''} ></img>
            <br />
            <input onChange={(e) => {
              setImage(e.target.files[0]);
            }} type="file" />
            <br />
            <button  onClick={handlesubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
