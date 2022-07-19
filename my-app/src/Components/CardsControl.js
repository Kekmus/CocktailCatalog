import MyInput from "./MyInput/MyInput"
import MySelect from "./MySelect/MySelect"
import "../styles/CardsControl.css"

function ControlCard({options, value, onChange}) {
  return (
    <div className="control__container">
      <MyInput />
      <MySelect
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default ControlCard
