
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventory from './components/AddInventory/AddInventory';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import MyItems from './components/MyItems/MyItems';

import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SingleInventory from './components/SingleInventory/SingleInventory';
import ReturnPolicy from './ReturnPolicy/ReturnPolicy';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/returnPolicy" element={<ReturnPolicy></ReturnPolicy>}></Route>
        <Route path='/addItems' element={<RequireAuth><AddInventory></AddInventory></RequireAuth>}></Route>
        <Route path='/manageInventory' element={<RequireAuth><ManageInventories></ManageInventories></RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><SingleInventory></SingleInventory></RequireAuth>}></Route>
        <Route path='/myItems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>

    </div >
  );
}

export default App;
