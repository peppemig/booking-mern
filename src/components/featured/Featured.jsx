import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {

    const {data,loading,error} = useFetch("http://localhost:8800/api/hotels/countyByCity?cities=Madrid,London,Berlin")

  return (
    <div className="featured">

        {loading ? 
            ("Loading please wait") : (
        <>
        <div className="featuredItem">
            <img src="https://www.collegiate-ac.es/propeller/uploads/sites/3/2019/11/florian-wehde-1092251-unsplash1-600x600.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Madrid</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://nacelesl.co.uk/wp-content/uploads/2019/06/london-600x600.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://yourtravelgroup.co.uk/wp-content/uploads/2016/12/Berlin-600x600.jpeg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div>
        </>)}
        
    </div>
  )
}

export default Featured