import "./NavMenu.css"

function NavMenu() {
  return (
    <div className="nav-menu">
      <ul className="nav-container">
        <li>
          <a href="#Home" >
            <img src="./home.svg" alt="home" width={25} />
            
          </a>
        </li>
        <li>
          <a href="#About">
            <img src="./about.svg" alt="about" width={25} />
          </a>
        </li>
        <li>
          <a href="#Projects">
            <img src="./project.svg" alt="project" width={25} />
          </a>
        </li>
        <li>
          <a href="#Contact">
            <img src="./contact.svg" alt="contact" width={25} />
          </a>
        </li>
      </ul>
    </div>

  )
}

export default NavMenu;