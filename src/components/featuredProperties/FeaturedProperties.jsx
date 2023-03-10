import React from 'react'
import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className="fp">

        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">7Seasons Apartments Budapest</span>
            <span className="fpCity">Budapest, Hungary</span>
            <span className="fpPrice">Starting from €132</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Oriente Palace Apartments</span>
            <span className="fpCity">Madrid, Spain</span>
            <span className="fpPrice">Starting from €155</span>
            <div className="fpRating">
                <button>9.1</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">Cheval Three Quays at The Tower of London</span>
            <span className="fpCity">London, United Kingdom</span>
            <span className="fpPrice">Starting from €690</span>
            <div className="fpRating">
                <button>9.4</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=73f8c029827076805ee781cdf818bb5e5e9b963227d74e4ebe071f3564ae4423&o=&s=1" alt="" className="fpImg" />
            <span className="fpName">The Apartments by The Sloane Club</span>
            <span className="fpCity">Chelsea, United Kingdom</span>
            <span className="fpPrice">Starting from €530</span>
            <div className="fpRating">
                <button>9.1</button>
                <span>Excellent</span>
            </div>
        </div>

    </div>
  )
}

export default FeaturedProperties