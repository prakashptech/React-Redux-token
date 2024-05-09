import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './employess.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeDelete, fetchEmployeeSuccess } from '../actions/employeeActions';

const EmployeeList = () => {
  const [employees1, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
const token = localStorage.getItem('token')
const {id} = useParams()
console.log('jj',id)
const employees = useSelector(state=>state.employees.employees)
const dispatch = useDispatch();



  useEffect(() => {
    const fetchEmployees = async () => {
      if (!token) {
        // If token is not available, redirect the user to the login page or handle unauthorized access
        console.log('User not authenticated. Redirecting to login page.');
        // Example: history.push('/login');
        return;
      }

      setLoading(true);
      setError('');
      try {
        const response = await axios.get('http://localhost:5000/api/employees', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('prakash',response)
        // setEmployees(response.data);
        const data = response.data
        dispatch(fetchEmployeeSuccess(data));
      } catch (error) {
        console.error('Error fetching employees:', error);
        setError('Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [token]);
const createmp = () =>{
  window.location.href="dashboard"
}
  // const handleDelete = async (id) => {
  //   console.log('id', id);
  //   try {
  //     await axios.delete(`http://localhost:5000/api/employees/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     // Optionally, you can update the employee list after deletion
  //     const updatedEmployees = employees.filter(employee => employee._id !== id);
  //     console.log('filetr',updatedEmployees)
  //     setEmployees(updatedEmployees);
  //   } catch (error) {
  //     console.error('Error deleting employee:', error);
  //   }
  // };

  // const handleDelete = async (id) =>{
  //   try{
  //     axios.delete(`http://localhost:5000/api/employees/${id}`)
  //     const updatemp = employees.filter((emp)=>emp._id !==id);
  //     setEmployees(updatemp)
  //   }catch{
  //     console.log(error)
  //   }
  // }

  const handleDelete =async (id) =>{
    try{
      axios.delete(`http://localhost:5000/api/employees/${id}`,{
        headers: {
          Authorization:`Brearer ${token}`
        }
      })
      const updateemp = employees.filter((e)=>e._id !== id);
      // setEmployees(updateemp)
      dispatch(fetchEmployeeDelete(id))

    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <ul>
          {employees.map((employee, ) => (
            <div className="employee-card" key={employee._id}>
              <div className="employee-info">
                <div className="employee-details">
                  <strong>Name:</strong> {employee.name}, <strong>Position:</strong> {employee.position},{' '}
                  <strong>Salary:</strong> {employee.salary}
                </div>
                <div className="employee-actions">
                  <Link to={`/update/${employee._id}`}>
                    <button>Edit</button>
                  </Link>
                {/* <Link to={`/update/${employee._id}`}>
                <button>Edit</button> 
                </Link> */}

                  <button onClick={() => handleDelete(employee._id)}>Delete</button> {/* Delete button */}
                  <button onClick={createmp}>Dashboard</button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
