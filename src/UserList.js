import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';

const UserList = () => {
  const variants=[
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
    'Success',
    'Secondary',
  ]
  const [users, setUsers] = useState([]);
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
    console.log(response.data);  
    setUsers(response.data);
  })
     
}, []);  
  return (
  <div className='contain'>
    {users.map((el,i)=> <User key={i} variant={variants[i]} user={el}/> )}
    </div>
    );
  
};

export default UserList;
