// Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profilecss.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent } from '@mui/material';


const Profile = () => {
  const [user, setUser] = useState(null);
  const [isopen, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [serror, ssetError] = useState('');
  const [namee, setNamee] = useState(false);
  const [positionErr, setPositionErr] = useState(false);
  const token = localStorage.getItem('token');

  const salaryfun = (e) =>{
    const value= e.target.value;
    if(value.length<6){
      setSalary(value)
      ssetError('');
    }else{
      ssetError("max 6 chars allowed")
    }
 }

 const handlePosition = (e) =>{
    const value = e.target.value;
    if(value.length<6){
      setPosition(value);
      setPositionErr(false)
    }else{
      setPositionErr(true)
    }
 }

 const hanldeChangeName = (e) =>{
  const value=e.target.value
  if(value.length<6) {
    setName(value);
    setNamee('');
  }else{
    setNamee('max 6 chars allowed');
  }
 }
 const handleSubmit =async (e) =>{
  e.preventDefault();
  // setLoading(true)
    try{
    const res =axios.post('http://localhost:5000/api/employees', {name, position, salary});
    const data = res.data
    //  console.log('hey', data)
      window.location.href = '/employeeList'
    }catch(err){
      console.log(err)
    }
 }
  // const handleSubmit = async (e) => {

    
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/employees', { name, position, salary }, {
  //       headers: {
  //         Authorization: `Bearer ${token}` // Include token in request headers
  //       }
  //     });
  //     console.log('Employee created:', response.data);
  //     window.location.href = '/employeeList';
  //     // Optionally, you can reset the form fields here
  //   } catch (error) {
  //     console.error('Error creating employee:', error);
  //     setError('Failed to create employee');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const diaolgOpenbtn = () =>{
      setOpen(true);
  }

  const handleClosebtn = () =>{
    setOpen(false);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    console.log(userId)
    console.log('prakash', token)
    if (token) {
      axios.get('http://localhost:5000/profile', { // Change the endpoint to fetch user profile
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          console.log('presp', response)
          const restsr = response.data
          console.log('res',restsr.username)
          setUser(restsr);
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        {/* Add more user profile information here */}
      </div>
      {/* <a className="profile-link" href='/employee'>Create Employee</a> */}
      <button onClick={diaolgOpenbtn}>Create Employee</button>

     
          <Dialog
          open={isopen}
          onClose={handleClosebtn}
          style={{marginTop:'-190px', marginLeft:'940px'}}
          >
            <DialogTitle>
              Create Employee
              <button onClick={handleClosebtn} style={{marginLeft:'15px'}}>X</button>
            </DialogTitle>
           
            <DialogContent>
            <div className="container">
      {token ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={hanldeChangeName}
            />
            <span style={{color:'red'}}>{namee}</span>
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={handlePosition}
            />
            {positionErr && <span style={{color:'red'}}>max 6 digits allowed</span>}
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary:</label>
            <input
              type="text"
              id="salary"
              value={salary}
              onChange={salaryfun}
            />
            <span style={{color:'red'}}>{serror}</span>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      ) : (
        <p>You need to log in to create an employee.</p>
      )}
    </div>
            </DialogContent>
          </Dialog>
        
      
    </div>
  );
};

export default Profile;
