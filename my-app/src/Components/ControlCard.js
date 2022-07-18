

function ControlCard() {
  return (
    <div className="control_container">
      <input
        type="text"
        placeholder="Let's find some drinks...">
      </input>
      <select name="sortType" id="">
        <option value="name">Sort by name</option>
        <option value="type">Sort by Type</option>
      </select>
    </div>
  )
}

export default ControlCard
