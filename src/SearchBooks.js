import React , {useState ,useEffect, useMemo}  from 'react' ;
import { Link } from "react-router-dom";
import Results from './Results';
import * as Api from './BooksAPI' ;
import { debounce } from 'lodash'



const SearchBooks = (props) => {
  
  const [q , setQ] = useState("");
  const [books , setBooks] = useState([]);
  


  const getBooks = () => useMemo(
    () => {
      debounce(() => {
      console.log(q);
      Api.search(q , 10).then(a => {a.error ? setBooks([]) : setBooks(a) }) ;
      } , 100) ;
    },
    [q],
  )
  
  useEffect(() => {
   
    if(q.trim() !== '') {
      console.log('effect: ' , q);
      getBooks();
    }else {
      setBooks([]) ;
    }
  
  } , [q] )
  
  return (
  <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                
                <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title or author"/>

              </div>
            </div>
            <Results mybooks={props.mybooks} search={books} />
          </div>
  )
}

export default SearchBooks ;