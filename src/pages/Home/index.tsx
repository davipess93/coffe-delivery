import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  HeroGrid,
  HeroContainer,
  HeroInfos,
  HeroList,
  HomeContainer,
  IconContainer,
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
                <IconContainer>
                  <ShoppingCart size={16} weight="fill" />
                </IconContainer>
                Compras simples e segura
              </span>
              <span>
                <IconContainer>
                  <Package size={16} weight="fill" />
                </IconContainer>
                Embalagem mantém o café intacto
              </span>
            </div>
            <div>
              <span>
                <IconContainer>
                  <Timer size={16} weight="fill" />
                </IconContainer>
                Entrega rápida e rastreada
              </span>
              <span>
                <IconContainer>
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
    </HomeContainer>
  )
}
