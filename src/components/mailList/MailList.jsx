import React from 'react'
import './mailList.css'

const MailList = () => {
  return (
    <div className="mailListContainer">
        <div className="mailListTitles">
            <h1>Save time, save money</h1>
            <span>Sign up and we'll send the best deals for you!</span>
        </div>
        <div className='mailInput'>
            <input className='mailText' type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
        <div className="registerYourStructure">
          <button>Register your property</button>
        </div>
    </div>
  )
}

export default MailList