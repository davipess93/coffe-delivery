import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  HeroGrid,
  HeroContainer,
  HeroInfos,
  HeroList,
  HomeContainer,
  IconContainer,
  CoffeListContainer,
  CoffeList,
} from './styles'
import hero from '../../assets/hero.png'
import { CoffeeCard } from './components/CoffeeCard'

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
            {/* <div> */}
            <div>
              <IconContainer backgroundColor="cart">
                <ShoppingCart size={16} weight="fill" />
              </IconContainer>
              Compras simples e segura
            </div>
            <div>
              <IconContainer backgroundColor="package">
                <Package size={16} weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </div>
            {/* </div> */}
            {/* <div> */}
            <div>
              <IconContainer backgroundColor="timer">
                <Timer size={16} weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </div>
            <div>
              <IconContainer backgroundColor="coffee">
                <Coffee size={16} weight="fill" />
              </IconContainer>
              O café chega fresquinho até você
            </div>
            {/* </div> */}
          </HeroList>
        </HeroGrid>

        <div>
          <img src={hero} alt="" />
        </div>
      </HeroContainer>

      <CoffeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeList>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeList>
      </CoffeListContainer>
    </HomeContainer>
  )
}
