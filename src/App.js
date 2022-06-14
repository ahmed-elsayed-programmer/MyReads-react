import React , {Suspense , useEffect , useState } from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import BookList from './BookList'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function BooksApp (props) {

  const [books , setBooks ] = useState([]);
  
  // const [showSearchPage , setShowSearch]= React.useState(false) ;
  
  useEffect( async () => {
    await BooksAPI.getAll().then(a => {setBooks(a)} )
  } , [books])
  
  
    return (
      <Suspense fallback={<h1>loading route …</h1>} >
          <div className="app"> 
              <BrowserRouter>
                  <Routes>
                    <Route index element={<BookList books={books} />} />
                    <Route path="/search" element={ <SearchBooks mybooks={books}/>} />
                  </Routes>
               </BrowserRouter>

            </div>
 	 </Suspense>
    )

}

export default BooksApp
