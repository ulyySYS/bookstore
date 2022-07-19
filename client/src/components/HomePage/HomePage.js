import React, { useState, useEffect } from 'react';
import Collection from '../Collection';

// passed in the toggleItemPopup function from App.js 
import { useOutletContext } from "react-router-dom";


const HomePage = () => {
  const [books,setBooks] = useState(null);
  const [togglePopup] = useOutletContext();
  const [throwError, setThrowError] = useState(null);
  
  useEffect(() => {
    fetch("/home-page_books")
      .then(res => {
        if(!res.ok){
          throw Error("failed to fetch data");
        }
        return res.json();
      })
      .then(data => {
        setBooks(data);
        console.log(data);
      })
      .catch(err => {
        setThrowError(err.message);
        console.log(err);
      })
  }, [])

  return (
        books ? <div className='homepage'>
                  <Collection data={books[0]} click={togglePopup}/>
                  <Collection data={books[1]} click={togglePopup} />
                 </div>: !throwError ? <h1>loading...</h1>:
                                       <h1>{throwError}</h1>
      
  )
}

export default HomePage