import "./MySelect.css"

function MySelect({options, value, onChange}) {
  return (
    <select
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
