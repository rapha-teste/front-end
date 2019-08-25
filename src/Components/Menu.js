// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// import './Menu.css';

// import api from '../services/api';

// import dashboard from '../assets/analytics.png'
// import perfilEdit from '../assets/perfil-edit-2.png'

// export default function Header({ match }) {

//   const [ user, setUser ] = useState([])

//     useEffect(() => {

//         async function loadUser() {
//             const response = await api.get(`/main/${match.params.id}`)

//             setUser(response.data.user)

//         }

//         loadUser();
//     }, [ match.params.id ]);

//   return (
//     <div className="menu">
//         <nav className="nav">
//         <header className="title-menu"><Link to="/">{`Olá,  ${user.name}`}</Link></header>
//           <ul>
//             <Link to="/">
//               <img src={dashboard} width="16px" alt="a"/>
//               <li>Dashboard</li>
//             </Link>
//             <Link to="/">
//               <img src={perfilEdit} width="20px" alt="a"/>
//               <li>Perfil</li>
//             </Link>
//           </ul>
//         </nav>
//     </div>  
//   );
// }