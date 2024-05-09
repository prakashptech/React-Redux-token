import React, { useState } from 'react';
import axios from 'axios';
import './employeecreate.css';

const CreateEmployeeForm = () => {
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
      ssetError("Please enter 6 digits number only")
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

 const hanldeName = (e) =>{
  const value=e.target.value
  if(value.length<6) {
    setName(value);
  }else{
    setName('enter the 6 characters only')
  }
 }
  const handleSubmit = async (e) => {

    
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/employees', { name, position, salary }, {
        headers: {
          Authorization: `Bearer ${token}` // Include token in request headers
        }
      });
      console.log('Employee created:', response.data);
      window.location.href = '/employeeList';
      // Optionally, you can reset the form fields here
    } catch (error) {
      console.error('Error creating employee:', error);
      setError('Failed to create employee');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Create Employee</h2>
      {token ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={hanldeName}
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
            {positionErr && <span style={{color:'red'}}>Please enter 6 didgits characters</span>}
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
  );
};

export default CreateEmployeeForm;
