import CartWidget from "../../common/cart/CartWidget"
import './NavBar.css'
const NavBar = () => {
  return (
    <div className="ContainerNavBar">
        <h1 className="ClassH1">
            Techno informat S.A
        </h1>
        <div className="algo">
          <ul className="ClassA">
              <a> Productos </a>
              <a> Nosotros </a>
              <a> Home  </a>
              <a> Contacto  </a>
          </ul>
        </div>
        <CartWidget />
    </div>
  )
};
 
export default NavBar;