import React from 'react';
import Cards from './Cards';

const Collection = ({data, click}) => {
  return (     
    <div className='collection-container'>
        <div className='collection-name-container'>
          <h2 className='collection-name'> Current Best Sellers On {data.display_name} </h2>
        </div>      
        <div className='collection'>
          {data.books.map(book => <Cards key={book.key}
                                          data={book} 
                                          click={click}
                                          />)}
        </div>
        
    </div>

  )
}

export default Collection