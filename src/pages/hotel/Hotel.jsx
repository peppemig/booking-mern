import React, { useContext, useState } from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const {id} = useParams()

  const {data,loading,error,reFetch} = useFetch(`http://localhost:8800/api/hotels/find/${id}`)

  const { dates, options } = useContext(SearchContext)
  
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)

  const handleOpen = (number) => {
    setSlideNumber(number)
    setOpen(true)
  }

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      {open && (
          <div className="slider">
            <div className="sliderWrapper">
              <FontAwesomeIcon icon={faArrowCircleRight}  className='nextBtn' onClick={() => slideNumber < 5 ? setSlideNumber(slideNumber + 1) : console.log('no more images') }/>
              <FontAwesomeIcon icon={faArrowCircleLeft}  className='backBtn' onClick={() => slideNumber > 0 ? setSlideNumber(slideNumber - 1) : console.log('no more images') }/>
              <FontAwesomeIcon icon={faCircleXmark} className='closeBtn' onClick={() => setOpen(false)} />
              <img src={data.photos[slideNumber]} alt="" className='sliderImg noselect'/>
            </div>
          </div>
        )}
      
      {loading ? "Loading..." : (

      <div className="hotelContainer">

        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}, {data.city}</span>
          </div>
          <span className="hotelDistance">Excellent location - {data.distance}m from center</span>
          <span className="hotelPriceHighlight">Book a stay at €{data.cheapestPrice} at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {loading ? "Loading" : 
            data.photos?.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
              </div>)
            )}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of {data?.city}</h1>
              <p className="hotelDesc">{data.description}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-nights stay!</h1>
              <span>Located in the heart of {data.city}, this property has an excellent location score!</span>
              <h2><b>€{parseInt(data?.cheapestPrice) * days * options.room}</b> ({days} nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>)
      }

    </div>
  )
}

export default Hotel