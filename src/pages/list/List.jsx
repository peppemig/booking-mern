import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./list.css"
import format from 'date-fns/format'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import { upperFirstLetter } from '../../utils/upperFirstLetter'
import { SearchContext } from '../../context/SearchContext'

const List = () => {

  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destinationUpper)
  const [dates, setDates] = useState(location.state.dates)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const {data,loading,error,reFetch} = useFetch(`http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)

  const {dispatch} = useContext(SearchContext)

  const handleClick = () => {
    dispatch({type: "NEW_SEARCH", payload: {destination, dates, options }})
    reFetch()
  };

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">

          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" onChange={ev=>setDestination(upperFirstLetter(ev.target.value))}/>
            </div>

            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "dd-MM-yyyy")} to ${format(dates[0].endDate, "dd-MM-yyyy")}`}</span>
              {openDate && (
                              <DateRange 
                              onChange={item=>setDates([item.selection])}
                              minDate={new Date()}
                              ranges={dates}
                            />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Min price <small>per night</small></span>
                    <input type="number" className="lsOptionInput" onChange={ev=>setMin(ev.target.value)}/>
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Max price <small>per night</small></span>
                    <input type="number" className="lsOptionInput" onChange={ev=>setMax(ev.target.value)}/>
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input min={1} placeholder={options.adult} type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input min={0} placeholder={options.children} type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input min={1} placeholder={options.room} type="number" className="lsOptionInput" />
                  </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>

          <div className="listResult">

            {loading ? "Loading..." : 
              <>
              {data.map(item => (
                <SearchItem key={item._id} item={item}/>
              ))}
              </>
              }
            

          </div>

        </div>
      </div>
    </div>
  )
}

export default List