import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Components/Header'

import Login from './pages/Login';
import Main from './pages/Main';
import CreateUser from './pages/CreateUser';


export default function Routes(){
    return (
        <BrowserRouter>
            
            <Route path="/" exact component={Login}/>
            <Route path="/main/:id"component={Header}/>
            <Route path="/main/:id" component={Main}/>
            <Route path="/create-user" component={CreateUser}/>

        </BrowserRouter>
    )
}