import React from 'react'

function Search({seaechTerm, setSearchterm}) {
  return (
    <div className='search'>
        <div>
            <img src="./search.svg" alt="search button" />
            <input
                type="text"
                placeholder='Search for a movie...'
                value={seaechTerm}
                onChange={(e) => setSearchterm(e.target.value)}
            />
        </div>
    </div>

  )
}

export default Search