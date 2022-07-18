import "../styles/CardsControl.css"

function ControlCard({options, value, onChange}) {
  return (
    <div className="control__container">
      <input
        type="text"
        placeholder="Let's find some drinks...">
      </input>
      <select
        name="sortType"
        id=""
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        {options.map(option =>
          <option key={option.value} value={option.value}>{option.name}</option>
        )}
      </select>
    </div>
  )
}

export default ControlCard
