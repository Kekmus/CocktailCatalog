import ControlCard from "./CardsControl"
import CocktailCard from "./CocktailCard"
import "../styles/Main.css"

function Main() {
  return (
    <main class="main__container">
      <ControlCard />
      <div class="cocktail-list">
        <CocktailCard />
        <CocktailCard />
        <CocktailCard />
        <CocktailCard />
      </div>
    </main>
  )
}

export default Main
