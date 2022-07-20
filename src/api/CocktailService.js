const getCocktail = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  const res = await fetch(url);
  const cocktail = await res.json();
  return cocktail.drinks[0]
}


export const getAllCocktails = async () => {
  const cocktails = [];
  for(let i = 0; i < 10; i++) {
    await getCocktail()
      .then((data) => {cocktails.push(data)})
  }
  return cocktails
}
