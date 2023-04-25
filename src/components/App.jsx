import React from "react"
import { lazy } from 'react';
import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(()=> import('../pages/Home/Home'))
const UsersPage = lazy(() => import("../pages/UserPage/UsersPage")) 


export const App = () => {
return (
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<UsersPage/>}/>
        <Route path="*" element={<HomePage />} />
        </Route>
    </Routes>
)


}