import React from "react";
 
const Item = ({handleClose, data}) => {
  console.log(window.innerWidth)
  
  return (
    <div className="popup-box" >
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>

        {/*this to change the design pattern when it doesnt fit comfortably in the screen anymore */}
        {window.innerWidth > 600 ? 
        <div className='item-container'>
          <img src={data.img} alt="book cover" />
          <div>
            <div className='book-info'>
              <h1>{data.title}</h1><hr/>
              <p className='info'>Author: {data.author}</p>
              <p className='info'>Publisher: {data.publisher}</p>
              <p className='description'><b>{data.description}</b></p>
            
            </div>
            <div className='btn-container'><a href={data.buy_link}><button>Purchase Book</button></a></div>
          </div>
        </div>
        :
        // this is for a smaller screen device
        <div className='item-container'>
          <div className='book-info'>
            <img src={data.img} alt="book cover" />
            <div>
              <h1>{data.title}</h1><hr/>
              <p className='info'>Author: {data.author}</p>
              <p className='info'>Publisher: {data.publisher}</p>   
            </div>
                   
          </div>
          <p className='description'><b>{data.description}</b></p> 
          <div className='btn-container'><a href={data.buy_link}><button>Purchase Book</button></a></div>       
        </div>
        }   
      </div>
    </div>
  );
};
 
export default Item;