import NavItem from "./NavItem";

function NavSection({ title, links }) {
  return (
    <section className="nav-section">
        <h4>{ title }</h4>
        <ul>
            {links.map((link, index) => (
                <NavItem className="" key={ index } text={ link }/>
            ))}
        </ul>
    </section>
  )
}

export default NavSection