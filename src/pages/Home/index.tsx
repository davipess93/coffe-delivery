import { v4 as uuid } from 'uuid'
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

type PrepareMode =
  | 'TRADICIONAL'
  | 'GELADO'
  | 'COM LEITE'
  | 'ALCOÓLICO'
  | 'ESPECIAL'

export interface CoffeeProps {
  id: string
  name: string
  description: string
  methods: PrepareMode[]
  price: number
  imageName: string
}

const coffees: CoffeeProps[] = [
  {
    id: uuid(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    methods: ['TRADICIONAL'],
    price: 9.9,
    imageName: 'expresso.png',
  },
  {
    id: uuid(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    methods: ['TRADICIONAL'],
    price: 9.9,
    imageName: 'americano.png',
  },
  {
    id: uuid(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    methods: ['TRADICIONAL'],
    price: 9.9,
    imageName: 'expresso-cremoso.png',
  },
  {
    id: uuid(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    methods: ['TRADICIONAL', 'GELADO'],
    price: 9.9,
    imageName: 'cafe-gelado.png',
  },
  {
    id: uuid(),
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    methods: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageName: 'cafe-com-leite.png',
  },
  {
    id: uuid(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    methods: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageName: 'latte.png',
  },
  {
    id: uuid(),
    name: 'Cappucino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    methods: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageName: 'capuccino.png',
  },
  {
    id: uuid(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    methods: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageName: 'macchiato.png',
  },
  {
    id: uuid(),
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    methods: ['TRADICIONAL', 'COM LEITE'],
    price: 9.9,
    imageName: 'mochaccino.png',
  },
  {
    id: uuid(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    methods: ['ESPECIAL', 'COM LEITE'],
    price: 9.9,
    imageName: 'chocolate-quente.png',
  },
  {
    id: uuid(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    methods: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    price: 9.9,
    imageName: 'cubano.png',
  },
  {
    id: uuid(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    methods: ['ESPECIAL'],
    price: 9.9,
    imageName: 'havaiano.png',
  },
  {
    id: uuid(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    methods: ['ESPECIAL'],
    price: 9.9,
    imageName: 'arabe.png',
  },
  {
    id: uuid(),
    name: 'Irlândes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    methods: ['TRADICIONAL'],
    price: 9.9,
    imageName: 'irlandes.png',
  },
]

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
          </HeroList>
        </HeroGrid>

        <div>
          <img src={hero} alt="" />
        </div>
      </HeroContainer>

      <CoffeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeList>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              description={coffee.description}
              imageName={coffee.imageName}
              methods={coffee.methods}
              name={coffee.name}
              price={coffee.price}
            />
          ))}
        </CoffeList>
      </CoffeListContainer>
    </HomeContainer>
  )
}
