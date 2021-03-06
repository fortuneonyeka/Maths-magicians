import { NavLink } from 'react-router-dom';

function NavBar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator/',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote/',
      text: 'Quote',
    },
  ];

  return (
    <nav className="nav-menu">
      <a className="nav-title" href="/">
        Math Magicians
      </a>
      <ul className="nav-menu-list">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
