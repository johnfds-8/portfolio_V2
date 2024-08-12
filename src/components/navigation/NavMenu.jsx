import "./NavMenu.css"

function NavMenu() {
  return (
    <div className="nav-menu">
      <ul className="nav-container">
        <li>
          <a href="#Home" >
            <img src="./home.svg" alt="home" width={25} />
            <p className="text-container">Home</p>
            
          </a>
        </li>
        <li>
          <a href="#About">
            <img src="./about.svg" alt="about" width={25} />
            <p className="text-container">About</p>
          </a>
        </li>
        <li>
          <a href="#Projects">
            <img src="./project.svg" alt="project" width={25} />
          </a>
          <p className="text-container">Projects</p>
        </li>
        <li>
          <a href="#Contact">
            <img src="./contact.svg" alt="contact" width={25} />
          </a>
          <p className="text-container">Contact</p>
        </li>
      </ul>
    </div>

  )
}

export default NavMenu;