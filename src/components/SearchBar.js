import React, { useState } from 'react'

export default function SearchBar() {
  const [search, setSearch] = useState('')

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input type="text" name="search" value={search} onChange={updateSearch}></input>
    </div>
  )
}
