import styles from "./CocktailCard.module.css"

function CocktailCard({name, id, remove, image}) {
  return(
    <div className={styles.cocktail_item}>
      <img
        className={styles.cocktail_item__img}
        src={image}
        alt="cocktail"
      />
      <p className={styles.cocktail_item__name}>{name}</p>
      <button
        className={styles.cocktail_item__close_button}
        onClick={() => {remove(id)}}
      />
    </div>

  )
}


export default CocktailCard
