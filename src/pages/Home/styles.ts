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

export const CoffeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
`
