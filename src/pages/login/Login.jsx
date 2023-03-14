import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"
import Navbar from '../../components/navbar/Navbar'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typewriter from 'typewriter-effect';
import logo from '../../assets/travel.png'

const Login = () => {
    const [openLogin, setOpenLogin] = useState(true)
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })

    const { loading, error, dispatch, user} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login", credentials)
            dispatch({type:"LOGIN_SUCCESS", payload: res.data })
            navigate("/")
        } catch (err) {
            //console.log(err)
            dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
            console.log(err.response.data)
        }
    }

    const handleLogout = async (e) => {
        dispatch({type: "LOGOUT"})
    }

  return (
    <>
    <Navbar />
    <div className="login">
        <div className="wrapper">
            <div className="lContainer1">

                {!user && openLogin &&
                <>
                <h1 style={{color: '#003580', paddingBottom: '10px'}}>Login</h1>
                <div className="textboxContainer">
                <span style={{color: '#003580'}}><FontAwesomeIcon icon={faUser}/> Username</span>
                <input type="text" id="username" onChange={handleChange} className="lInput" />
                </div>
                <div className="textboxContainer">
                <span style={{color: '#003580'}}><FontAwesomeIcon icon={faLock}/> Password</span>
                <input type="password"  id="password" onChange={handleChange} className="lInput" />
                </div>
                <div className="textboxContainer">
                <button onClick={handleLogin} className='registerButton'>Login</button>
                {error && <span>{error.message}</span>}
                </div>
                <div className='alreadyAccount'>
                <span>Don't have an account yet? </span>
                <button onClick={() => setOpenLogin(!openLogin)} className='signInButton'>Register</button>
                </div>
                </>
                }

                {!user && openLogin === false &&
                <>
                <h1 style={{color: '#003580', paddingBottom: '10px'}}>Register</h1>
                <div className="textboxContainer">
                <span style={{color: '#003580'}}><FontAwesomeIcon icon={faUser}/> Username</span>
                <input type="text" id="username" onChange={handleChange} className="lInput" />
                </div>
                <div className="textboxContainer">
                <span style={{color: '#003580'}}><FontAwesomeIcon icon={faEnvelope}/> Email</span>
                <input type="text" id="username" onChange={handleChange} className="lInput" />
                </div>
                <div className="textboxContainer">
                <span style={{color: '#003580'}}><FontAwesomeIcon icon={faLock}/> Password</span>
                <input type="password"  id="password" onChange={handleChange} className="lInput" />
                </div>
                <div className="textboxContainer">
                <button onClick={handleLogin} className='registerButton'>Register</button>
                {error && <span>{error.message}</span>}
                </div>
                <div className='alreadyAccount'>
                <span>Already have an account? </span>
                <button onClick={() => setOpenLogin(true)} className='signInButton'>Sign in</button>
                </div>
                </>
                }

                {user &&
                <>
                <h1 style={{color: '#003580'}}>You are already logged in :)</h1>
                <div className='alreadyAccount'>
                <span>Want to logout? </span>
                <button onClick={() => handleLogout()} className='signInButton'>Logout</button>
                </div>
                </>
                }

            </div>
            <div className="lContainer2" style={{backgroundImage: `url(${logo})`}}>
                <div className="textboxContainer">
                    <h1>Find your favourite <Typewriter
                            options={{
                                strings: ['hotel', 'apartment', 'resort', 'villa', 'cottage'],
                                autoStart: true,
                                loop: true,
                            }}
                    /> for your your next trip!</h1>
                </div>
                <div className="imageContainer">
                    <img src="https://static.vecteezy.com/system/resources/previews/010/916/009/original/3d-pin-location-travel-planing-concept-ui-icon-or-3d-pin-map-with-flight-plane-travel-free-png.png" alt="" />
                </div>
                <div className="textboxContainer">
                    <h2>peppebooking</h2>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login