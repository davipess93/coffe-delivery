import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Teresina, PI
        </span>

        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
