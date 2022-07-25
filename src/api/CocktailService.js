export const getAllCocktails = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  const requests = [fetch(url), fetch(url), fetch(url), fetch(url), fetch(url), fetch(url), fetch(url)]

  let cocktails = await Promise.all(requests)
    .then(responses => Promise.all(responses.map(r => r.json())))

  cocktails = cocktails.map(cocktail => cocktail.drinks[0])
  return cocktails
}
