import { CartWidget } from '../CartWidget';

export const Navbar = () => {
  return (
    <nav className="navbarDisplay">
      {/* LOGO */}
      <div>La Casa de los Helados</div>
      <ul className="ulDisplay">
        <li className="liDisplay">Conos</li>
        <li className="liDisplay">Copas</li>
        <li className="liDisplay">Familiar</li>
      </ul>
      <CartWidget />
    </nav>
  );
};