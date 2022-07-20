import CocktailCard from "./CocktailCard"
import "../styles/CocktailList.css"

function CocktailList({cocktails, remove}) {

  const coctailsList = cocktails.map((cocktail) =>
    <CocktailCard
      name={cocktail.strDrink}
      key={cocktail.idDrink}
      id={cocktail.idDrink}
      remove={remove}
    />
  )

  return (
    <div className="cocktail-list">
        {coctailsList}
    </div>
  )
}

export default CocktailList
