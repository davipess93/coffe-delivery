import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'

import coffee from '../../assets/products/coffee.png'

import {
  HeroGrid,
  HeroContainer,
  HeroInfos,
  HeroList,
  HomeContainer,
  IconContainer,
  CoffeListContainer,
  CoffeList,
  CoffeCard,
  CoffeCardLabel,
  CoffeCardImg,
  CoffeCardTitle,
  CoffeCardDescription,
  CoffeeCardFooter,
  CoffeCardPriceValue,
  ButtonGroup,
  IncrementButton,
  CartButton,
} from './styles'
import hero from '../../assets/hero.png'

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroGrid>
          <HeroInfos>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HeroInfos>

          <HeroList>
            <div>
              <span>
                <IconContainer backgroundColor="cart">
                  <ShoppingCart size={16} weight="fill" />
                </IconContainer>
                Compras simples e segura
              </span>
              <span>
                <IconContainer backgroundColor="package">
                  <Package size={16} weight="fill" />
                </IconContainer>
                Embalagem mantém o café intacto
              </span>
            </div>
            <div>
              <span>
                <IconContainer backgroundColor="timer">
                  <Timer size={16} weight="fill" />
                </IconContainer>
                Entrega rápida e rastreada
              </span>
              <span>
                <IconContainer backgroundColor="coffee">
                  <Coffee size={16} weight="fill" />
                </IconContainer>
                O café chega fresquinho até você
              </span>
            </div>
          </HeroList>
        </HeroGrid>

        <div>
          <img src={hero} alt="" />
        </div>
      </HeroContainer>

      <CoffeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeList>
          <CoffeCard>
            <CoffeCardImg src={coffee} alt="" />
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
          </CoffeCard>
        </CoffeList>
      </CoffeListContainer>
    </HomeContainer>
  )
}
