import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">

        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Rome</h1>
                <h2>436 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/641091.jpg?k=6b4c99444b439d2ce4dbf5a479674965a4f196f4cab39bf7dd34e214f1d30b83&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Naples</h1>
                <h2>241 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/619644.jpg?k=5b21ac6d3d913a54274d6546e60adb2c3c138d661dd1a2bd7b3aed53e9df0b65&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Milan</h1>
                <h2>739 properties</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Featured