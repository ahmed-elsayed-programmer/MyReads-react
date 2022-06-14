import React from 'react';
import BookShelf from './BookShelf'
import { Link } from "react-router-dom";


const BookList = ({books}) => {
  
 
  
  const cat = [ 
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }]

  return (
    <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
         </div>
        <div className="list-books-content">
          <div>
    		{cat.map(c => <BookShelf key={c.key} books={books} cat={c}/>)}
          </div>
        </div>
      <div className="open-search">
      <Link to="/search" >Add a book</Link>
      </div>
    </div>
  )
}

export default BookList ;