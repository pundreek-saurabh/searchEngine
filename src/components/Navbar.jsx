import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
// import {Link} from 'react-router-dom';
// react router dom , craco installation issue
 function Navbar (){
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-grey-700 border-grey-200"> 
            <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
            <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">My Own Google 🔎</p>
            </Link>
                
            <button type = "button" onClick={()=>setDarkTheme(!darkTheme)} className="text-xl dark:bg-grey-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">
                {darkTheme ? "Light" : "dark"}
            </button>
            </div>
        </div>
    )
 }
export default Navbar;