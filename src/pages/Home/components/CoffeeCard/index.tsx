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
  CoffeeCardLabelGroup,
  IncrementButton,
} from './styles'

// import expresso from '../../../../assets/products/expresso.png'
import { CoffeeProps } from '../..'

export function CoffeeCard({
  description,
  id,
  imageName,
  methods,
  name,
  price,
}: CoffeeProps) {
  return (
    <CoffeCardContainer>
      <CoffeCardImg src={`/src/assets/products/${imageName}`} alt="" />
      <CoffeeCardLabelGroup>
        {methods.map((method, index) => (
          <CoffeCardLabel key={index}>{method}</CoffeCardLabel>
        ))}
      </CoffeeCardLabelGroup>
      <CoffeCardTitle>{name}</CoffeCardTitle>
      <CoffeCardDescription>{description}</CoffeCardDescription>

      <CoffeeCardFooter>
        <span>
          R${' '}
          <CoffeCardPriceValue>
            {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </CoffeCardPriceValue>
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
