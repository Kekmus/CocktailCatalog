

function CocktailCard() {
  return(
    <div className="cocktail-item">
      <img
        className="cocktail-item__img"
        src="http://dummyimage.com/350"
        alt="cocktail"
      />
      <p className="cocktail-item__name">Margarita</p>
      <button className="cocktail-item__close-button" />
    </div>

  )
}


export default CocktailCard
