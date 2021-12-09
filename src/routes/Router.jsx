import React from 'react'
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Donate from "../pages/Donate";
import Serve from "../pages/Serve";
import Dashboard from "../pages/Dashboard";
import OrderDetails from "../pages/OrderDetails";

export default function Router() {
    return (
        <div>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:userId" element="Profile page" />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/serve" element={<Serve />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/orderdetails" element={<OrderDetails />} />
            </Routes>





        </div>
    )
}

