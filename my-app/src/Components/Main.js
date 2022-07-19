import React, { useState, useMemo } from 'react';
import ControlCard from "./CardsControl"
import CocktailList from "./CocktailList"
import "../styles/Main.css"

function Main() {
  // eslint-disable-next-line no-unused-vars
  const [cocktails, setCoctails] = useState(
    [
      {strDrink: 'Kek2', idDrink:'1111'},
      {strDrink: 'Kek3', idDrink:'2222'},
      {strDrink: 'Kek1', idDrink:'3333'},
      {strDrink: 'Kek4', idDrink:'4444'},
      {strDrink: 'Kek5', idDrink:'5555'},
    ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('kek')
    if(selectedSort) {
      return [...cocktails].sort((a, b) =>{ return a[selectedSort].localeCompare(b[selectedSort])})
    } else {
      return cocktails
    }
  }, [selectedSort, cocktails]);

  const sortedSerchedPosts = useMemo(() => {
    return sortedPosts.filter(post => {
      return post.strDrink.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }, [searchQuery, sortedPosts])

  function sortPosts(sort) {
    setSelectedSort(sort)
  }

  return (
    <main className="main__container">
      <ControlCard
        options={[
          {value: 'strDrink', name: 'По имени'},
          {value: 'idDrink', name: 'По ID'}
        ]}
        valueSelect={selectedSort}
        onChangeSelect={sortPosts}
        valueInput={searchQuery}
        onChangeInput={e => setSearchQuery(e.target.value)}
      />
      <CocktailList cocktails={sortedSerchedPosts}/>
    </main>
  )
}

export default Main
