import { NavLink } from "react-router-dom"
import clsx from 'clsx'

export const Navigation = ({ navigation }) => {

  return (
    <nav className="lsomab-nav-links">
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            clsx('lsomab-nav-link', isActive && 'lsomab-nav-link_active')
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}