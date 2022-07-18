import CocktailCard from "./CocktailCard"
import "../styles/CocktailList.css"

function CocktailList({cocktails}) {

  const coctailsList = cocktails.map((cocktail) =>
    <CocktailCard name={cocktail.strDrink} key={cocktail.idDrink}/>
  )

  return (
    <div className="cocktail-list">
        {coctailsList}
    </div>
  )
}

export default CocktailList
