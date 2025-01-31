import { Link } from "react-router-dom"; 

function NavItem({ className, to, text}) {
  return (
    <li className={ className }>
        <Link to={ to }>{ text }</Link>
    </li>
  )
}

export default NavItem