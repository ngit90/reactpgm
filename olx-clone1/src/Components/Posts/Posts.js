import React,{useEffect,useContext, useState} from 'react';
import { FirebaseContext } from '../../stores/Context';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {
  const {firebase} = useContext(FirebaseContext);
  const [products,setProducts] = useState([]);
  const db = getFirestore(firebase);

  useEffect(()=> {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  });
  return (
    <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {products.map((product)=> {
         return   <div className="card">
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">{product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
                </div>
        }) }
        </div>
      </div>
      <button className='postbtn'>Load More..</button>
    </div>
  );
}

export default Posts;
