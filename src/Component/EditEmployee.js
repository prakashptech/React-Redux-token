import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './employeecreate.css'

const EditEmployeeForm = ({ onUpdate }) => {
  const { id } = useParams(); // Extract employee ID from URL params
  console.log('hid', id);
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState({
    id: id,
    name: '',
    position: '',
    salary: '',
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`http://localhost:5000/api/employees/` + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('xyz', response)
        setEmployee(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employee:', error);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const upadte = () =>{
    window.location.href = '/employeeList';
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `http://localhost:5000/api/employees/` + id,
        { name: employee.name, position: employee.position, salary: employee.salary },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onUpdate();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (!employee) {
    return <div className="container">Employee not found</div>;
  }

  return (
    <div className="container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" value={employee.position} onChange={(e) => setEmployee({ ...employee, position: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input type="text" id="salary" value={employee.salary} onChange={(e) => setEmployee({ ...employee, salary: e.target.value })} />
        </div>
        <button onClick={upadte} type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEmployeeForm;
