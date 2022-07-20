import "./CocktailCard.css"

function CocktailCard({name, id, remove, image}) {
  return(
    <div className="cocktail-item">
      <img
        className="cocktail-item__img"
        src={image}
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
