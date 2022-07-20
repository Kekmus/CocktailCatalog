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

  function removeCocktail(id) {
    setCoctails(cocktails.filter(a => a.idDrink !== id))
  }

  // async function fetchCocktails() {
  //   const response = await axios.get("")
  //   console.log(response)
  // }

  // async function fetchCocktail() {
  //   const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  //   const res = await fetch(url);
  //   const cocktail = await res.json();
  //   return cocktail.drinks[0]
  // }

  // async function getCocktails() {
  //   const cocktails = [];
  //   for(let i = 0; i < 10; i++) {
  //     await CocktailService.getAllCocktails()
  //       .then((data) => {cocktails.push(data)})
  //   }
  //   return cocktails
  // }

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
        onChangeSelect={sortPosts}
        valueInput={searchQuery}
        onChangeInput={e => setSearchQuery(e.target.value)}
      />
      <CocktailList
        cocktails={sortedSerchedPosts}
        remove={removeCocktail}
      />
    </main>
  )
}

export default Main
