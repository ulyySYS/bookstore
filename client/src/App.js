import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Item from './components/Item';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [ itemData, setItemData] = useState();

  // this takes in the information of the clicked card as parameter
  const toggleItemPopup = (data) => {
    setIsOpen(!isOpen);
    setItemData(data)
  }

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(res => {
        console.log(JSON.stringify(res));
      })
  
    
  }, [])
  

  return (
    <div className="App">  
        <nav>
            <h1><b>BOOKSTORE</b></h1>
            <div>
              <Link to='/'><h3 >Home</h3></Link>
              <Link to='categories'><h3>More Categories</h3></Link>
              <Link to='contacts'><h3>Contacts</h3></Link>
            </div>                
        </nav>      
        <Outlet context={[toggleItemPopup]}/>
        {isOpen && <Item handleClose={toggleItemPopup} data={itemData}/>}
          
        
    </div>
  );
}

export default App;
