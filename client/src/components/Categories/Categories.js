import React,{ useEffect, useState} from 'react';
import Collection from '../Collection';

// passed in the toggleItemPopup function from App.js 
import { useOutletContext } from "react-router-dom";

const Categories = () => {
  const [booksData, setBooksData] = useState();
  const [togglePopup] = useOutletContext();
  const [throwError, setThrowError] = useState(null);

  useEffect(() => {
    fetch("/categories")
      .then(res => {
        if(!res.ok){
          throw Error("failed to fetch data")
        }
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data);
        setBooksData(data)
      })
      .catch(err => {
        setThrowError(err.message)
        console.log(err)
      })

  }, [])

  return (
    <div>
      {booksData ?    <div>
                        {booksData.map(books => <Collection data={books} click={togglePopup} key={books.display_name}/>)}
                      </div>:
        
      !throwError ? <h1>loading...</h1>:
                     <h1>{throwError}</h1>
      }     
    </div>
  )
}

export default Categories