const Header = ({personObj}) => {
  // console.log(props.personObj.firstName)
  return (
    <header>
      <h1>Welcom</h1>
      <p>{personObj.firstName} {personObj.lastName} </p>
    </header>
  )
}

export default Header;