import style from"./Header.module.css"


function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <h1 className={style.logo}>
          cocktails
        </h1>
      </div>
    </header>
  )
}

export default Header
