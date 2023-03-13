import React from 'react'
import './featuredProperties.css'
import useFetch from '../../hooks/useFetch'

const FeaturedProperties = () => {

    const {data,loading,error} = useFetch("http://localhost:8800/api/hotels?featured=true&limit=4")

  return (
    <div className="fp">

        {loading ? ("Loading...") : 
        <>
            {data.map((item) => (
                    <div className="fpItem" key={item._id}>
                        <img src={item.photos[0] !== undefined ? item.photos[0] : "https://cf.bstatic.com/xdata/images/hotel/square600/106674506.webp?k=87414ccf030be5eea38c609a98752fdd84cbf0cacbf7a3ef00458907c4872bae&o=&s=1"} alt="" className="fpImg" />
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">Starting from €{item.cheapestPrice}</span>
                        {item.rating &&
                        <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>
                        }
                    </div>
            ))}
        </>
        }
    </div>
)}

export default FeaturedProperties