import styled from 'styled-components'

import heroBackground from '../../assets/hero-background.png'

export const HomeContainer = styled.main`
  padding: 4rem 0;

  background-image: url(${heroBackground});
  /* background-clip: padding-box; */
  background-repeat: no-repeat;
  background-attachment: scroll;
  /* background-size: contain; */
  /* background-position: center; */

  // Hack para esticar o background
  margin: 0 -10rem;
  padding: 0 10rem;
`

export const HeroContainer = styled.header`
  display: flex;
  gap: 1rem;
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
