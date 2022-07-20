import "../styles/CocktailCard.css"

function CocktailCard({name, id, remove}) {
  return(
    <div className="cocktail-item">
      <img
        className="cocktail-item__img"
        src="http://dummyimage.com/350"
        alt="cocktail"
      />
      <p className="cocktail-item__name">{name}</p>
      <button
        className="cocktail-item__close-button"
        onClick={() => {remove(id)}}
      />
    </div>

  )
}


export default CocktailCard
