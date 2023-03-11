import React, { useState } from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const handleOpen = (number) => {
    setSlideNumber(number)
    setOpen(true)
  }

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/416154625.jpg?k=30ee5b9fb2fa9ee5fb0d0477b4d571ce278ad0cc30bf7ccf9f63f44c466ea712&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/416154623.jpg?k=04f33c255a0b4e6d2c821f532498fc218c3be9bc820a6187323a8c02c4eaeb25&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/416154629.jpg?k=24bfb749540ebe2c341e37e4597638935716207c87859ee30f5b51f123d65189&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/416154620.jpg?k=5595f5b8ca48c210b3c8d450079506ad11ce9262ed330fa1d8a9415db5261f7e&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/416154616.jpg?k=aab2e0e02e85275dd85b374be54d92960e67e9a611ab232070d8348158e65811&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/416154635.jpg?k=7cc74b99719fc57f6c90e161eb7854294b1ed62d3cef76f345ca827c6ef0d04b&o=&hp=1"
    }
  ]



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
              <img src={photos[slideNumber].src} alt="" className='sliderImg noselect'/>
            </div>
          </div>
        )}
      <div className="hotelContainer">



        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">SM Mellini Relais B&B</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>21 Via Pietro Cavallini, Vaticano Prati, 00193 Roma, Italia</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay at €114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Rome</h1>
              <p className="hotelDesc">Situato in posizione strategica a Roma, l'SM Mellini Relais B&B offre una colazione all'italiana e la connessione WiFi gratuita in tutta la struttura. Soggiornerete a 1 km dal Pantheon e a 1,2 km dalla Scalinata di Trinità dei Monti e dalla stazione della metropolitana Spagna. La struttura è non fumatori e sorge a meno di 1 km da Castel Sant'Angelo.

              Nelle camere troverete aria condizionata, armadio, bollitore, minibar, cassaforte, TV a schermo piatto e bagno privato con bidet.

              Tra i luoghi di interesse nelle vicinanze dell'SM Mellini Relais B&B figurano Piazza Navona, la stazione della metropolitana Lepanto e Piazza del Popolo. L’Aeroporto di Roma-Ciampino, lo scalo più vicino, sorge a 16 km dalla struttura, che fornisce il servizio di navetta aeroportuale a pagamento.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the heart of Rome, this property has an excellent location score!</span>
              <h2><b>€945</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>

    </div>
  )
}

export default Hotel