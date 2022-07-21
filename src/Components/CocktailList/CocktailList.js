import CocktailCard from "../CocktailCard/CocktailCard"
import style from "./CocktailList.module.css"

function CocktailList({cocktails, remove}) {
  return (
    <div className={style.cocktail_list}>
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
