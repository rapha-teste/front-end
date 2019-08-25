import React /*, { useEffect, useState }*/ from 'react'
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../assets/origami.png'
import avatar from '../assets/avatar.png'

// import api from '../services/api';

export default function Header({ match }) {

  // const [ users, setUsers ] = useState([]) 
  // const [ firstName, setFirstName ] = useState([])

  

  //   useEffect(() => {

  //       async function loadUser() {
  //           const response = await api.get(`/main/${match.params.id}`)

  //           setUsers(response.data.user)

  //           let firstName = response.data.user.name.split(' ', 1)
  //           setFirstName(firstName)

  //       }

  //       loadUser();
  //   }, [ match.params.id ]);

  return (
    <header id="main-header">
        <div className="header-content">
            <Link to="/" className="logo">
                <img src={logo} width="65px" alt="a"/>
                <h2>ClickDigital</h2>
            </Link>
            <Link className="user-content" to="/"> 
              <img className="avatar" src={avatar} alt="a" width="40px" />
              <p className="sair">Sair</p>
            </Link>
        </div>
    </header>  
  );
}