import style from"./Footer.module.css"

function Footer() {
  return (
    <footer className={style.footer__wrapper}>
      <a className={style.github__link} href="https://github.com/Kekmus/CocktailCatalog">Github repo</a>
    </footer>
  )
}

export default Footer
