export const getAllCocktails = async (count) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  const requests = [...Array(count).keys()].map(e => fetch(url));

  let cocktails = await Promise.all(requests)
    .then(responses => Promise.all(responses.map(r => r.json())));

  console.log(cocktails)
  cocktails = cocktails.map(cocktail => cocktail.drinks[0]);
  return cocktails;
}
