import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./navbar.css"

const Navbar = () => {

  const { user, dispatch} = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    dispatch({type: "LOGOUT"})
    navigate("/")
}

  return (
    <div className='navbar'>
        <div className="navContainer">
            <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
              <span className="logo">peppebooking</span>
            </Link>
            <div className="navItems">
                {user && <span>{user.username}</span>}

                {!user && <button className="navButton" onClick={() => navigate("/login")}>Login</button>}

                {user && <button className="navButton" onClick={() => handleLogout()}>Logout</button>}
            </div>
        </div>
    </div>
  )
}

export default Navbar