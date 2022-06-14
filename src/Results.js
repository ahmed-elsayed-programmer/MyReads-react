import React from 'react';
import Book from './Book';
import { PropTypes } from 'prop-types';



const Results = ({mybooks ,  search}) => {
  
  const books = search.map(book => {
    mybooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  
  return (
  			<div className="search-books-results">
              <ol className="books-grid">

				{books.length > 0 ? books.map(book => <Book key={book.id} book={book} />) : <h2> no books</h2>}
              </ol>
            </div>
  )
}
Results.propType = {
  mybooks : PropTypes.object.isRequired ,
  search : PropTypes.object.isRequired ,
}

export default Results ;