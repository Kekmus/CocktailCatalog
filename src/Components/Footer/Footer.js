import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer__wrapper}>
      <a
        target="_blank"
        rel="noreferrer"
        className={style.github__link}
        href="https://github.com/Kekmus/CocktailCatalog"
      >
        Github repo
      </a>
    </footer>
  );
}

export default Footer;
