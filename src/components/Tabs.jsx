
const Tabs = ({children,buttons , ButtonC="menu"}) => {
  return (
    <>
    <ButtonC>
    {buttons}
    </ButtonC>
    {children}
    </>
  )
}

export default Tabs
