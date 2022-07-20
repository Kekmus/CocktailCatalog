import MyInput from "../MyInput/MyInput"
import MySelect from "../MySelect/MySelect"
import "./CardsControl.css"

function ControlCard({options, valueInput, onChangeInput, onChangeSelect, valueSelect}) {
  return (
    <div className="control__container">
      <MyInput
        placeholder={"Let's find some drinks..."}
        value={valueInput}
        onChange={onChangeInput}
      />
      <MySelect
        options={options}
        value={valueSelect}
        onChange={onChangeSelect}
      />
    </div>
  )
}

export default ControlCard
