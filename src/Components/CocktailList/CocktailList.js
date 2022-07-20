import CocktailCard from "../CocktailCard/CocktailCard"
import "./CocktailList.css"

function CocktailList({cocktails, remove}) {
  return (
    <div className="cocktail-list">
        {cocktails.map((cocktail) =>
          <CocktailCard
            name={cocktail.strDrink}
            key={cocktail.idDrink}
            id={cocktail.idDrink}
            image={cocktail.strDrinkThumb}
            remove={remove}
          />
        )}
    </div>
  )
}

export default CocktailList
