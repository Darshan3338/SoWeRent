import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROOMS } from '../utils/Constants';


const Search = () => {
  const [Showpopup,setShowpopup] = useState(false)
  const navigate = useNavigate()

  const filtersearch = () =>{
      setShowpopup(!Showpopup)
  }

  const NewArrivalsHandler = () =>{
    navigate("/properties/NewArrivals")
  }
  const UpCommingHandler = () =>{
    navigate("/properties/UpComming")
  }

  return (
    <div className='properties-container'>
        <div className='p-links'>
        <Link to={"/"}>Home /</Link>
        <Link to={"/properties"}>properties /</Link>
        </div>
        <div className="box">
            <input className='box-input' type="text" placeholder='Search various Location'/>
            <button className='filter' placeholder='More Filters' onClick={filtersearch}>
                <p>More Filters</p>
                <img className='f-img' style={{width:"30px", height:"30px"}} src="./src/assets/filter.png" alt="" />            
            </button>
        </div>
        <div className="img-cards">
            <h1>Apartments for Rent in Bangalore</h1>
            </div>
            <div className='rooms'>
              {
                ROOMS.map((im,index)=>(
                  <div className='rooms-box'>
                  <img key={index} src={im.img} name={im.name} type={im.type}/>
                  <p className='roomsname'>{im.name}</p>
                  <p className='roomsname'>{im.type}</p>
                  </div>
                ))
              }
            </div>
            {
              Showpopup && 
              (
                <div className='popup-container'> 
                    <p className='pop-p'>Discover various home aesthetics with our customization choices
                    <span className='pop-close' onClick={filtersearch}>❌</span>
                    </p>
                    <div className='tags'>
                        <h2>Tags</h2>
                        <button className='NewArrivals' onClick={NewArrivalsHandler}>New Arrivals</button>
                        <button className='UpComming' onClick={UpCommingHandler}> Up Comming</button>
                    </div>
                </div>
              )
            }
       
    </div>
  );
}

export default Search;
