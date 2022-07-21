import style from "./MySelect.module.css"

function MySelect({options, value, onChange}) {
  return (
    <select
      className={style.mySelect}
      name="sortType"
      id=""
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      {options.map(option =>
          <option
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
      )}
    </select>
  )
}


export default MySelect
