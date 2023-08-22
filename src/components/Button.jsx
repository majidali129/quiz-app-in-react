
export default function Button({children, onclick}) {
  return (
    <button className="primary--btn" 
    onClick={onclick}
    >{children}</button>
  )
}
