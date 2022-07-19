import "./MyInput.css"

function MyInput(props) {
  return (
    <input
      className="input"
      type="text"
      {...props}
    />
  )
}


export default MyInput
