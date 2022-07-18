import React, { useState } from 'react';
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

  const [selectedSort, setSelectedSort] = useState();

  function sortPosts(sort) {
    setSelectedSort(sort)
    setCoctails([...cocktails].sort((a, b) =>{
      return a[sort].localeCompare(b[sort])
    }))
  }

  return (
    <main className="main__container">
      <ControlCard
        options={[
          {value: 'strDrink', name: 'По имени'},
          {value: 'idDrink', name: 'По ID'}
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />
      <CocktailList cocktails={cocktails}/>
    </main>
  )
}

export default Main
