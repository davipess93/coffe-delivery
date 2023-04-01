import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ButtonGroup,
  CartButton,
  CoffeCardContainer,
  CoffeCardDescription,
  CoffeCardImg,
  CoffeCardLabel,
  CoffeCardPriceValue,
  CoffeCardTitle,
  CoffeeCardFooter,
  IncrementButton,
} from './styles'

import traditionalCoffe from '../../../../assets/products/coffee.png'

export function CoffeeCard() {
  return (
    <CoffeCardContainer>
      <CoffeCardImg src={traditionalCoffe} alt="" />
      <CoffeCardLabel>TRADITIONAL</CoffeCardLabel>
      <CoffeCardTitle>Expresso Tradicional</CoffeCardTitle>
      <CoffeCardDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeCardDescription>

      <CoffeeCardFooter>
        <span>
          R$ <CoffeCardPriceValue>9,90</CoffeCardPriceValue>
        </span>
        <ButtonGroup>
          <IncrementButton>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </IncrementButton>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </ButtonGroup>
      </CoffeeCardFooter>
    </CoffeCardContainer>
  )
}
