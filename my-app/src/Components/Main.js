import React, { useState, useMemo, useEffect } from 'react';
import ControlCard from "./CardsControl"
import CocktailList from "./CocktailList"
import "../styles/Main.css"
import CocktailService from "../API/CocktailService"

function Main() {
  // eslint-disable-next-line no-unused-vars
  const [cocktails, setCoctails] = useState(
    []);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedCocktails = useMemo(() => {
    console.log('kek')
    if(selectedSort) {
      return [...cocktails].sort((a, b) =>{ return a[selectedSort].localeCompare(b[selectedSort])})
    } else {
      return cocktails
    }
  }, [selectedSort, cocktails]);

  const sortedSerchedCocktails = useMemo(() => {
    return sortedCocktails.filter(cocktail => {
      return cocktail.strDrink.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }, [searchQuery, sortedCocktails])

  function sortCocktails(sort) {
    setSelectedSort(sort)
  }

  function removeCocktail(id) {
    setCoctails(cocktails.filter(a => a.idDrink !== id))
  }

  useEffect(() => {
    const promise = CocktailService.getAllCocktails()
    promise.then((cocktails) => {setCoctails(cocktails)})
  }, [])

  return (
    <main className="main__container">
      <ControlCard
        options={[
          {value: 'strDrink', name: 'По имени'},
          {value: 'idDrink', name: 'По ID'}
        ]}
        valueSelect={selectedSort}
        onChangeSelect={sortCocktails}
        valueInput={searchQuery}
        onChangeInput={e => setSearchQuery(e.target.value)}
      />
      <CocktailList
        cocktails={sortedSerchedCocktails}
        remove={removeCocktail}
      />
    </main>
  )
}

export default Main
