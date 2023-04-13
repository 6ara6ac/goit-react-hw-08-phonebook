import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {Contacts} from 'pages/Contacts'
import { Layout } from "./Layout";
import { useAuth } from "hooks";
import Login from "pages/Login";
import Register from "pages/Register";




export const App = () => {


  return <> 
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    </Route>
  </Routes>
  
  </>
};
