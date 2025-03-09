import React from 'react';
import { BG_URL } from '../utils/Constants';
import { useNavigate } from 'react-router-dom';
const Body = () => {
  const navigate = useNavigate()
  const handlebtn = () =>{
 

    navigate("/properties")
  }
  return (
    <div className='container'>
      <img src={BG_URL} alt="hotem-img" className='bg' />
      <div className='obs'>
      <h1 className='onbg'>Trusted Rentals for Long and Short Stay</h1>
      <h2 className='onbgh2'>No Brokerage, No Commission</h2>
      <h3 className='onbgh3'>Choose from over 1000+ fully managed flats at affordable prices!</h3>
      <div className="selctcontainer">
          <select className='select'>
            <option value="Stay Type">Stay Type</option>
            <option value="Short Term">Short Term</option>
            <option value="Long Term">Long Term</option>
          </select>
          <select className='select'>
            <option value="Property Type">Property Type</option>
            <option value="Studio">Studio</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
          </select>
          <input className='search-loc' type="text" placeholder='Search various locations'/>
          <button className='search-btn' onClick={handlebtn}>
            <img style={{width:"60px"}} src="./src/assets/scan.png"/>
          </button>
      </div>
      </div>
   
    </div>

  );
}

export default Body;
