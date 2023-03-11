import React from 'react'
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className="pList">

        <div className="pListItem">
            <img className="pListImg" src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" />
            <div className="pListTitle">
                <h1>Hotels</h1>
                <h2>2351 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img class="pListImg" src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=" alt="" />
            <div className="pListTitle">
                <h1>Apartments</h1>
                <h2>1263 apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img class="pListImg" src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" />
            <div className="pListTitle">
                <h1>Resorts</h1>
                <h2>856 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img class="pListImg"src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=" alt="" />
            <div className="pListTitle">
                <h1>Villas</h1>
                <h2>1623 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img class="pListImg" src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" alt="" />
            <div className="pListTitle">
                <h1>Cottages</h1>
                <h2>936 cottages</h2>
            </div>
        </div>

    </div>
  )
}

export default PropertyList