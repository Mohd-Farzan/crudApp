import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS for Bootstrap components
import './App.css';
import UserTable from './assets/Table/UserTable'; // Corrected relative paths
import Navbar from './Componant/Navbar.jsx';
import SignupUser from './Componant/SignupUser.jsx';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div className="w-full h-screen bg-yellow-500 text-black">
      <UserTable />
    </div>
  );
}
