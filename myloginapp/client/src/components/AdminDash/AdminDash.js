import React, { useEffect, useState } from 'react';
import axios from "axios";
import './AdminDash.css';
import {  useDispatch} from 'react-redux';
import { logouts } from "../../redux/authSlice";
import { Link, useNavigate } from 'react-router-dom';

export default function AdminDash() {
    const navigate = useNavigate();
    const [users,setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    const dispatch = useDispatch();

useEffect( ()=>{
    async function fetchData(){
        const url = "http://localhost:3009/api/admindash/find";
        const response = await axios.get(url);
        setUsers(response.data);
        console.log(response.data);
    }
       fetchData();
},[users]);

const handledelete = async (userid) => {
    try {
        await axios.delete(`http://localhost:3009/api/admindash/delete/${userid}`);
        //setUsers(users.filter(user => user._id !== userid));
        navigate('/admindash');
    } catch (error) {
        console.error('Error updating user', error);
    }
}

 
const handleLogout = () => {
		localStorage.removeItem("token");
    dispatch(logouts());
    window.location = "/adminlogin";
};

const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) 
);

  return (
    <div className="main_container">
    <nav className="navbar">
        <h1>MY WEB_APP</h1>
        <div className='navlast'>
        <Link to='/admincreate' className='createlink'>Create NewUser</Link>
        <button className="white_btn" onClick={handleLogout}>
            Logout
        </button>
        </div>
    </nav>
    <div>
           <h2 className='welcome'> ADMIN DASHBOARD</h2>
           {/* Search input */}
           <div style={{ marginLeft: '17rem', marginBottom: '1rem' }}>
                    <input 
                        type="text" 
                        placeholder="Search by Name" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        style={{ padding: '0.5rem', width: '40%', borderRadius:'0.5rem',marginLeft:'10rem'}}
                    />
                </div>
           <h2 className="pb-2" style={{marginLeft:'10rem'}}>User List :</h2>
<div>
<table className="table table-success table-hover w-75" style={{marginLeft:'10rem',borderRadius:'1rem'}}>
    <thead>
        <tr >
            <th className="p-3">NAME </th>
            <th className="p-3">EMAIL ID </th>
            <th className="p-3">UPDATE </th>
            <th className="p-3">REMOVE </th>
        </tr>
    </thead>
    <tbody>
    {filteredUsers.length > 0 ? (
                                filteredUsers.map((user, index) => (
                                    <tr key={index}>
                                        <td className="p-3">{user.firstName} {user.lastName}</td>
                                        <td className="p-3">{user.email}</td>
                                        <td className="p-4 ">
                                            <button onClick={()=> navigate(`/admin/edit/${user._id}`)}>Edit</button>
                                            
                                        </td>
                                        <td className="p-3">
                                                <button className="btn-info" type="button" onClick={()=> handledelete(user._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="p-3 text-center">No users found</td>
                                </tr>
                            )}
    </tbody>
</table>
</div>
    </div>
</div>
  )
}
