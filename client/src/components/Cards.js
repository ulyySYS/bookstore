import React from 'react'

const Cards = ({data, click}) => {
  return (
    //the data.key in the className is for the css grid layout
    <div className={`cards card${data.key}`} onClick={() => click(data)}>
        
        <img src={data.img} alt="book cover"/>
        <h3>{data.title} </h3>
    </div>
  )
}

export default Cards