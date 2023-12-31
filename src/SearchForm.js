import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query,handleSearch}=useGlobalContext()
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search Hacker News</h2>
      <input type="text" className="form-input"
      onChange={(e)=>handleSearch(e.target.value)}
      value={query}
      />
    </form>
  )
}

export default SearchForm
