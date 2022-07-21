import style from "./MyInput.module.css"

function MyInput(props) {
  return (
    <input
      className={style.myInput}
      type="text"
      {...props}
    />
  )
}


export default MyInput
