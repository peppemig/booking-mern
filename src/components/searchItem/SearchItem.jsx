import React from 'react'
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/416154623.jpg?k=04f33c255a0b4e6d2c821f532498fc218c3be9bc820a6187323a8c02c4eaeb25&o=&hp=1" alt="" className="siImg" />
        
        <div className="siDesc">
            <h1 className="siTitle">SM Mellini Relais B&B</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">B&B with Air conditioning</span>
            <span className="siFeatures">1 balcony • 1 bathroom • 1 bedroom</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">€123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem