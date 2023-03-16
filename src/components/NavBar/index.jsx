import { CartWidget } from '../CartWidget';

export const Navbar = () => {
  return (
    <nav className="navbarDisplay">
      {/* LOGO */}
          <div>
              <img src={imagenes[2]}/>
          </div>
      <ul className="ulDisplay">
        <li className="liDisplay">Helados de Vaso</li>
        <li className="liDisplay">Helados en conos</li>
        <li className="liDisplay">Helados Familiares</li>
      </ul>
      <CartWidget />
    </nav>
  );
};