import React from 'react';
import { ROOMS } from '../utils/Constants';
import { useNavigate } from 'react-router-dom';

const NewArrivals = () => {
  const navigate = useNavigate()
  const backhandler = () =>{
      navigate("/properties")
  }
  return (
    <div>
      <div className="img-cards">
                  <h1>New Arrivals</h1>
                  </div>
                  <div className='newarrivals'>
                    {
                      ROOMS.map((im,index)=>im.type==="New Arrivals" ?(
                        <div key={index} className='rooms-box'>
                        <img src={im.img} name={im.name} type={im.type}/>
                        <p className='roomsname'>{im.name}</p>
                        <p className='roomsname'>{im.type}</p>
                        </div>
                      ): null)
                      
                    }
                  </div>
                  <button onClick={backhandler} className='btn'>back</button>

    </div>
  );
}

export default NewArrivals;
