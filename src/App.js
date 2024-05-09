import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Profile from './Component/Profile';
import CreateEmployeeForm from './Component/Employee';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './Component/EmployeeList';
import EditEmployeeForm from './Component/EditEmployee';
import Dashboard from './Component/Dshboard';
import TestComp from './Component/TestComp';
import Abc from './Component/Abc';
import { Provider } from 'react-redux';
import store from './store';



function App() {
  const [token, setToken] = useState('');
  

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login setToken={setToken} />} />
          <Route path="/profile" element={<Profile token={token} />} />
          <Route path="/dashboard" element={<Dashboard token={token} />} />
          <Route  path="/employee" element={<CreateEmployeeForm token={token} />} />
          <Route path="/employeeList" element={<EmployeeList token={token} />} />
          <Route path="/update/:id" element={<EditEmployeeForm token={token} />} />
          </Routes>
      </Router>
    </Provider>
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Login setToken={setToken} />} />
    //       <Route path="/profile" element={<Profile token={token} />} />
    //       <Route path="/dashboard" element={<Dashboard token={token} />} />
    //       <Route  path="/employee" element={<CreateEmployeeForm token={token} />} />
    //       <Route path="/employeeList" element={<EmployeeList token={token} />} />
    //       <Route path="/update/:id" element={<EditEmployeeForm token={token} />} />
    //       </Routes>
    //   </Router>
    // </div>
  );
}

export default App;
