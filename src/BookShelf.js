import React from 'react'
import Book from './Book'



const BookShelf = ({cat , books}) => {
  
  const bookSh = books.filter(b =>( b.shelf === cat.key))
  

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{cat.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">

		{bookSh.map(book => <Book key={book.id} book={book} bshelf={book.shelf}/>)}
			
        </ol>
      </div>
    </div>


  )
}

export default BookShelf ;