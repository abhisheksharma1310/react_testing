
type propType = {
  name?: string
};

const Greet = ({name}: propType) => {
  return (
    <div>Hello {name}</div>
  )
}

export default Greet