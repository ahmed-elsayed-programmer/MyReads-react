import React , {useState } from 'react'
import { PropTypes } from 'prop-types';
import * as BooksAPI from './BooksAPI'
 


const Book = ({ book }) => {
  const [shelf , setShelf] = useState(book.shelf) ;
  
  const moveShelf = (shelf) => {
    BooksAPI.update(book , shelf)
    setShelf(shelf)
  }
 

  return (
    <li>
    <div className="book">
    	<div className="book-top">
    	<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks ? book.imageLinks.thumbnail :'icons/book-placeholder.svg'
            })` }}></div>
		<div className="book-shelf-changer">
          <select value={shelf ? shelf : 'none'}  onChange={(e) => moveShelf(e.target.value , book.id)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
		</div>
	</div>
	<div className="book-title">{book.title}</div>
	<div className="book-authors">{book.authors ? book.authors.join(" , ") : "no Author" }</div>
  </div>
  </li>
  )
}

Book.propTypes = {
  book : PropTypes.object.isRequired ,
  

}


export default Book ;