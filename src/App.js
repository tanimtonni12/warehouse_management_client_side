
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventory from './components/AddInventory/AddInventory';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';

import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SingleInventory from './components/SingleInventory/SingleInventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/addItems' element={<RequireAuth><AddInventory></AddInventory></RequireAuth>}></Route>
        <Route path='/manageInventory' element={<RequireAuth><ManageInventories></ManageInventories></RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><SingleInventory></SingleInventory></RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div >
  );
}

export default App;
