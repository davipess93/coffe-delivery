import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 4rem 0;
`

export const HeroContainer = styled.div`
  display: flex;
  gap: 1rem;

  margin-bottom: 6rem;
`

export const HeroGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const HeroInfos = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const HeroList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    display: flex;

    span {
      display: flex;
      align-items: center;

      flex: 1;
      gap: 1rem;

      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }
`

const BACKGROUD_ICONS = {
  cart: 'darkYellow',
  package: 'text',
  timer: 'yellow',
  coffee: 'purple',
} as const

interface BackgroundProps {
  backgroundColor: keyof typeof BACKGROUD_ICONS
}

export const IconContainer = styled.div<BackgroundProps>`
  background: ${(props) => props.theme[BACKGROUD_ICONS[props.backgroundColor]]};
  padding: 8px;
  border-radius: 50%;
`

export const CoffeListContainer = styled.div`
  h1 {
    font-size: 2rem;
  }
`

export const CoffeList = styled.div``

export const CoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  width: 16rem;
  padding: 1.5rem;
  position: relative;
  margin-top: 3.375rem;

  border-radius: 6px 36px;

  background: ${(props) => props.theme.card};
`

export const CoffeCardImg = styled.img`
  position: absolute;

  top: -1rem;
  left: 0;
  right: 0;
  margin: auto;
`

export const CoffeCardLabel = styled.span`
  margin-top: 80px;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 50px;

  background: ${(props) => props.theme.lightYellow};
  color: ${(props) => props.theme.darkYellow};
`

export const CoffeCardTitle = styled.h1`
  font-size: 20px !important;
  color: ${(props) => props.theme.subtitle};
`

export const CoffeCardDescription = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.label};
  text-align: center;
`

export const CoffeeCardFooter = styled.div`
  width: 100%;

  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CoffeCardPriceValue = styled.span`
  color: ${(props) => props.theme.text};
  font-size: 24px;
  font-weight: 800;
  font-family: 'Baloo 2', cursive;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const IncrementButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;

  background: ${(props) => props.theme.button};
  /* padding: 0.25rem 0.5rem; */

  span {
    color: ${(props) => props.theme.title};
  }

  button {
    background: transparent;
    display: flex;
    padding: 0.725rem 0.5rem;
    border: none;
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.darkPurple};
    }
  }
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.darkPurple};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme.card};
  }
`
